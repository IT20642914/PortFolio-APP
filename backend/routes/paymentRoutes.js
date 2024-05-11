const express = require('express');
const router = express.Router();
const {
    addPayment,
    getAllPayments,
    updatePayment,
    deletePayment,
    getPaymentById,
    generatePaymentReport,
    getPaymentsByUserId
} = require("../controllers/paymentController");

router.post("/payment/add", addPayment);
router.get("/payment/getall", getAllPayments);
router.patch("/payment/update/:id", updatePayment);
router.delete("/payment/delete/:id", deletePayment);
router.get("/payment/get/:id", getPaymentById);
// Updated report endpoint to include user ID
router.get('/report/:userId', generatePaymentReport);
router.get('/user/:userId', getPaymentsByUserId);
module.exports = router;
