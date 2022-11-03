
//@desc   Get goals
//@route  GET /api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "goals" });
};

//@desc   Delete goals
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: "goals" });
};

//@desc   Update goals
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: "goals" });
};

module.exports = { getGoals, deleteGoal, updateGoal };
