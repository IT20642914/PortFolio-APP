const express = require("express");
const router = express.Router();
 const {AddFeedback, getALlFeedBack,updateSpecificFeedback,deleteSpecificFeedback,generateFeedbackReport} = require("../controllers/feedbackController");
// POST method to add feedback
router.post("/feedback",AddFeedback);
router.get("/feedback",getALlFeedBack);
router.patch("/feedback/update", updateSpecificFeedback);
router.delete("/feedback/delete", deleteSpecificFeedback);
router.get('/generate-report', generateFeedbackReport);
module.exports = router;
