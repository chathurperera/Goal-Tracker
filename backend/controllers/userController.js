const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//@desc Authenticate a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Check for user email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  //Verifying the password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({
    _id: user._id,
    email: user.email,
    name: user.name,
    token: generateToken(user._id),
  });
});

//@desc Get user data
//@route GET /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, email, name } = await User.findById(req.user.id);
  res.status(200).json({ id: _id, email, name });
});

//@desc Register new user
//@route POST /api/goals/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if ((!name, !email, !password)) {
    return res.status(400).json({ message: "Please add fields" });
  }

  //If user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  //Create the user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    return res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Invalid user data" });
  }

  res.status(200).json({ message: "use registered" });
});

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = { getMe, loginUser, registerUser };
