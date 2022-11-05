const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//@desc Authenticate a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logged in" });
});

//@desc Get user data
//@route GET /api/users/me
//@access public
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "use data" });
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
    return res
      .status(201)
      .json({ _id: user._id, email: user.email, name: user.name });
  } else {
    return res.status(400).json({ message: "Invalid user data" });
  }

  res.status(200).json({ message: "use registered" });
});

module.exports = { getMe, loginUser, registerUser };
