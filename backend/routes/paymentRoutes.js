const express = require('express');
const router = express.Router();
const {
    addPayment,
    getAllPayments,
    updatePayment,
    deletePayment
} = require("../controllers/paymentController");

router.post("/payment/add", addPayment);
router.get("/payment/get", getAllPayments);
router.patch("/payment/update/:id", updatePayment);
router.delete("/payment/delete/:id", deletePayment);

module.exports = router;
