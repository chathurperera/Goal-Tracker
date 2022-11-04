const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

//@desc   Get goals
//@route  GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});

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
    text: req.body.text,
  });

  res.status(200).json(goal);
});

//@desc   Delete goals
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "goals" });
});

//@desc   Update goals
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "goals" });
});

module.exports = { getGoals, deleteGoal, updateGoal, setGoals };
