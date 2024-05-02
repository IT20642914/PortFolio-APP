const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ data: user }, process.env.JWT_SECRET || 'jsecret', {
    expiresIn: '30d'
  })
}

const decodeJwtToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'jsecret')
}
const sendTokenResponse = async (res, user, message) => {
  const accessToken = generateToken(user);

  res.status(200).json({
    data: { user, access_token: accessToken },
    message,
  });
};

const loginUser = async (req, res) => {
  try {
    const query = { email: req.body.email.toString() };
    const user = await User.findOne(query);

    console.log(req.body.password);
    if (!user) {
      res.status(400).json({message:"User not found, please register first"});
    } else {
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        res.status(400).json("Wrong credentials");
      } else {
        const { password, ...others } = user._doc;
        console.log(others);
        sendTokenResponse(res, others, "successful");
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};



const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      ...req.body,
      password: hashedPassword, // Save the hashed password
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Select all except the password field
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const getUserById = async (req, res) => {
  try {
    const userId = req.query.id; // Extract user ID from request parameters
    const user = await User.findById(userId).select('-password'); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.query.id; // Extract user ID from request parameters
    const updateData = req.body; // Extract updated data from request body

    // Update the user in the database
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { loginUser, registerUser, getAllUsers, getUserById, updateUser };