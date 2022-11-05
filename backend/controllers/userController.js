const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

//@desc Authenticate a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "logged in" });
});

//@desc Get user data
//@route GET /api/users/me
//@access public
const getMe = asyncHandler((req, res) => {
  res.status(200).json({ message: "use data" });
});

//@desc Register new user
//@route POST /api/goals/users
//@access public
const registerUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "use registered" });
});

module.exports = {getMe , loginUser, registerUser };
