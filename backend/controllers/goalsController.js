const asyncHandler = require("express-async-handler");

//@desc   Get goals
//@route  GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "goals" });
});

//@desc   Post goals
//@route  POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "goals" });
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
