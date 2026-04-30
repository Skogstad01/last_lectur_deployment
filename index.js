import express from "express";
import { User } from "./models/index.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { username, description } = req.body;
  const user = await User.create({ username, description });
  res.json(user);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
