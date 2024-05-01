const User = require('../models/User');
const bcrypt = require('bcrypt');

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
      res.status(400).json("Wrong credentials");
    } else {
      const validated = await bcrypt.compare(req.body.password, user.password);
      // !validated && res.status(400).json("Wrong credentials")
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

module.exports = { loginUser };