const Payment = require('../models/Payment');

// POST method to add a payment
const addPayment = async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).send({ message: "Payment added successfully!", payment: newPayment });
    } catch (error) {
        res.status(400).send({ message: "Failed to add payment", error: error.message });
    }
};

// GET method to retrieve all payments
const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate('reservationId ServiceProviderId');
        res.status(200).send(payments);
    } catch (error) {
        res.status(500).send({ message: "Failed to get payments", error: error.message });
    }
};

// PATCH method to update payment details
const updatePayment = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedPayment) {
            return res.status(404).send({ message: "Payment not found" });
        }
        res.status(200).send({ message: "Payment updated successfully", payment: updatedPayment });
    } catch (error) {
        res.status(400).send({ message: "Failed to update payment", error: error.message });
    }
};

// DELETE method to remove a payment
const deletePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPayment = await Payment.findByIdAndDelete(id);
        if (!deletedPayment) {
            return res.status(404).send({ message: "Payment not found" });
        }
        res.status(200).send({ message: "Payment deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: "Failed to delete payment", error: error.message });
    }
};

const getPaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await Payment.findById(id);
        if (!payment) {
            return res.status(404).send({ message: "Payment not found" });
        }
        res.status(200).send(payment);
    } catch (error) {
        res.status(500).send({ message: "Failed to get payment details", error: error.message });
    }
};
module.exports = {
    addPayment,
    getAllPayments,
    updatePayment,
    deletePayment,
    getPaymentById
};
