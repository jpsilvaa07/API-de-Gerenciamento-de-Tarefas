require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

connectDB();
const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");
});