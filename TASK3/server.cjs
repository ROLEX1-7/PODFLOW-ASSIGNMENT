const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// connect to MongoDB (service name "mongo" will come from docker-compose)
mongoose
  .connect("mongodb://mongo:27017/podflowdb")
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.log(" Mongo error:", err));

// simple schema
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Hello hello podflow!!");
});

app.get("/prajwal", (req, res) => {
  res.send("Hello SHETTY!!");
});

// add one record
app.get("/add", async (req, res) => {
  const user = new User({ name: "Prajwal" });
  await user.save();
  res.send("User added!");
});

// fetch all records
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
