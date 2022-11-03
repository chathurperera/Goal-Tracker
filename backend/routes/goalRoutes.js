const express = require("express");
const router = express.Router();
const {getGoals,deleteGoal,updateGoal} = require('../controllers/goalsController');

router.get("/", getGoals);
router.delete("/:id", deleteGoal);
router.put("/:id", updateGoal);

module.exports = router;
