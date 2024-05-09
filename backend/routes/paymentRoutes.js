const express = require('express');
const router = express.Router();
const {
    addPayment,
    getAllPayments,
    updatePayment,
    deletePayment,
    getPaymentById
} = require("../controllers/paymentController");

router.post("/payment/add", addPayment);
router.get("/payment/getall", getAllPayments);
router.patch("/payment/update/:id", updatePayment);
router.delete("/payment/delete/:id", deletePayment);
router.get("/payment/get/:id", getPaymentById);

module.exports = router;
