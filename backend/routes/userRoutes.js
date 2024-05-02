const express = require('express');
const router = express.Router();
const { loginUser, registerUser,getAllUsers,getUserById,updateUser } = require("../controllers/userController");

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);

// Get all users route
router.route('/users').get(getAllUsers);
router.get('/', getUserById);
router.put('/', updateUser);

module.exports = router;