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




module.exports = { loginUser ,registerUser};