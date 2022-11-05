const express = require("express");
const router = express.Router();
const {
  getGoals,
  deleteGoal,
  updateGoal,
  setGoals,
} = require("../controllers/goalsController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getGoals);
router.post("/", protect, setGoals);
router.delete("/:id", protect, deleteGoal);
router.put("/:id", protect, updateGoal);

module.exports = router;
