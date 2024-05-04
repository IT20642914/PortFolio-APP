const express = require("express");
const router = express.Router();
 const {AddFeedback, getALlFeedBack,updateSpecificFeedback,getPostDetailsAndFeedback,deleteSpecificFeedback,generateFeedbackReport,getAverageRatingsForPost} = require("../controllers/feedbackController");
// POST method to add feedback
router.post("/feedback",AddFeedback);
router.get("/feedback",getALlFeedBack);
router.patch("/feedback/update", updateSpecificFeedback);
router.delete("/feedback/delete", deleteSpecificFeedback);
router.get('/generate-report', generateFeedbackReport);
router.get('/average-ratings', getAverageRatingsForPost);
router.get('/getPostDetailsAndFeedback', getPostDetailsAndFeedback);
module.exports = router;
