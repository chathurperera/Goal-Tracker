const express = require("express");
const router = express.Router();
const {getGoals,deleteGoal,updateGoal,setGoals} = require('../controllers/goalsController');

router.get("/", getGoals);
router.post("/", setGoals);
router.delete("/:id", deleteGoal);
router.put("/:id", updateGoal);

module.exports = router;
