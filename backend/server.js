const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require('./config/db');

connectDB();
//ROUTES
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.get("/api/goals", (req, res) => {
  res.status(200).send("Get goals");
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
