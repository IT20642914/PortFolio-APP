const feedbackModel = require('../models/feedbackSchema');
const postModel = require('../models/Portfolio');

// POST method to add feedback
const AddFeedback = async (req, res) => {
    try {
      const { postID, feedbackDetails } = req.body;
  
      let feedback = await feedbackModel.findOne({ postID });
  
      if (!feedback) {
        feedback = new feedbackModel({
            postID,
            feedbackDetails: feedbackDetails.map(detail => ({
                ...detail,
                createdAt: new Date() // Set createdAt timestamp for new feedback details
            }))
        });
    } else {
        feedback.feedbackDetails.push(...feedbackDetails.map(detail => ({
            ...detail,
            createdAt: new Date() // Set createdAt timestamp for new feedback details
        })));
    }
  
      await feedback.save();
      res.status(201).send({ message: "Feedback added successfully!", feedback });
    } catch (error) {
      res.status(400).send({ message: "Failed to add feedback", error: error.message });
    }
  }
  
  
  // GET method to retrieve all feedbacks
const getALlFeedBack= async (req, res) => {
    try {
      const feedbacks = await feedbackModel.find().populate({
        path: 'postID',
        select: '_id portfolio_name category email'
    })
    .exec();
      res.status(200).send(feedbacks);
    } catch (error) {
      res.status(500).send({ message: "Failed to get feedback", error: error.message });
    }
}

// PATCH method to update a specific feedback detail
const updateSpecificFeedback = async (req, res) => {
    const feedbackId = req.query.feedbackId; // Get feedback document ID from query parameters
    const detailId = req.query.detailId; // Get feedback detail ID from query parameters
    const updates = req.body;

    try {
        // Find the document that contains the feedback detail
        const feedback = await feedbackModel.findById(feedbackId);
        if (!feedback) {
            return res.status(404).send({ message: "Feedback not found" });
        }

        // Find the index of the specific feedback detail
        const detailIndex = feedback.feedbackDetails.findIndex(detail => detail._id.toString() === detailId);
        if (detailIndex === -1) {
            return res.status(404).send({ message: "Feedback detail not found" });
        }

        // Update the specific feedback detail
        Object.keys(updates).forEach(updateKey => {
            feedback.feedbackDetails[detailIndex][updateKey] = updates[updateKey];
        });

        await feedback.save();
        res.status(200).send({ message: "Feedback detail updated successfully", feedback });
    } catch (error) {
        res.status(400).send({ message: "Failed to update feedback", error: error.message });
    }
}


// DELETE method to remove a specific feedback detail using query parameters
const deleteSpecificFeedback = async (req, res) => {
    const feedbackId = req.query.feedbackId; // Get feedback document ID from query parameters
    const detailId = req.query.detailId; // Get feedback detail ID from query parameters

    try {
        const feedback = await feedbackModel.findById(feedbackId);
        if (!feedback) {
            return res.status(404).send({ message: "Feedback not found" });
        }

        // Find and remove the specific feedback detail
        const detailIndex = feedback.feedbackDetails.findIndex(detail => detail._id.toString() === detailId);
        if (detailIndex === -1) {
            return res.status(404).send({ message: "Feedback detail not found" });
        }

        feedback.feedbackDetails.splice(detailIndex, 1);
        await feedback.save();
        res.status(200).send({ message: "Feedback detail deleted successfully", feedback });
    } catch (error) {
        res.status(400).send({ message: "Failed to delete feedback", error: error.message });
    }
}


const generateFeedbackReport = async (req, res) => {
    try {
        const [feedbacks, postCounts] = await Promise.all([
            feedbackModel.aggregate([
                {
                    $lookup: {
                        from: "posts",
                        localField: "postID",
                        foreignField: "_id",
                        as: "postDetails"
                    }
                },
                {
                    $unwind: "$postDetails"
                },
                {
                    $unwind: "$feedbackDetails"
                },
                {
                    $group: {
                        _id: "$postID",
                        portfolioName: { $first: "$postDetails.portfolio_name" },
                        averageResponsibility: { $avg: "$feedbackDetails.responsibility" },
                        averageFriendliness: { $avg: "$feedbackDetails.friendliness" },
                        averageCreativity: { $avg: "$feedbackDetails.creativity" },
                        averageReliability: { $avg: "$feedbackDetails.reliability" },
                        averageOverallSatisfaction: { $avg: "$feedbackDetails.overallSatisfaction" },
                        count: { $sum: 1 }
                    }
                },
                {
                    $project: {
                        portfolioName: 1,
                        averageResponsibility: 1,
                        averageFriendliness: 1,
                        averageCreativity: 1,
                        averageReliability: 1,
                        averageOverallSatisfaction: 1,
                        count: 1
                    }
                }
            ]),
            postModel.countDocuments()
        ]);

        if (!feedbacks.length) {
            return res.status(404).json({ message: "No feedback found." });
        }

        const totalPosts = postCounts;
        const postWithFeedback = feedbacks.length;
        res.status(200).json({
            feedbacks,
            postWithFeedback,
            totalPosts
        });
    } catch (error) {
        res.status(500).json({ message: "Error generating report", error: error.message });
    }
};

module.exports = { getALlFeedBack ,AddFeedback,updateSpecificFeedback,deleteSpecificFeedback,generateFeedbackReport};