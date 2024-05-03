const feedbackModel = require('../models/feedbackSchema');


// POST method to add feedback
const AddFeedback = async (req, res) => {
    try {
      const { postID, feedbackDetails } = req.body;
  
      let feedback = await feedbackModel.findOne({ postID });
  
      if (!feedback) {
        feedback = new feedbackModel({
          postID,
          feedbackDetails: feedbackDetails  // Ensure feedbackDetails is an array
        });
      } else {
        feedback.feedbackDetails.push(...feedbackDetails);  // Use the spread operator if feedbackDetails is an array
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
      const feedbacks = await feedbackModel.find().populate('postID');
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

module.exports = { getALlFeedBack ,AddFeedback,updateSpecificFeedback,deleteSpecificFeedback};