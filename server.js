const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require ("cors");

// Import Routes
const productRoutes = require("./routes/productRoutes");

//  Connect to MongoDB
const mongodbURL = process.env.MONGODB_URL;
mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Connection Error =>"));

db.once("open", () => {
  console.log("Connected to Database Successfully");
});

// cors middleware
app.use (
  cors({
    origin:"*",
  })
)

// Middleware
app.use(express.json());
app.use(productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log(`Server is running at port 5000`);
});
