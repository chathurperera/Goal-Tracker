const express = require("express");
require("dotenv").config();
const app = express();

//ROUTES
const goalRoutes = require('./routes/goalRoutes');


app.use('/api/goals',goalRoutes);


const PORT = process.env.PORT || 5000;
app.get("/api/goals", (req, res) => {
  res.status(200).send("Get goals");
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
