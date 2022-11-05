const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

//@desc   Get goals
//@route  GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

//@desc   Post goals
//@route  POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({ message: "Please add a text field" });
  }

  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });

  res.status(200).json(goal);
});

//@desc   Delete goals
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    return res.status(400).json({ message: "Goal not found" });
  }

  const user = await User.findById(req.user.id);

  //Check user
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  //Makes sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

//@desc   Update goals
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    return res.status(400).json({ message: "Goal not found" });
  }
  const user = await User.findById(req.user.id);

  //Check user
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  //Makes sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

module.exports = { getGoals, deleteGoal, updateGoal, setGoals };
