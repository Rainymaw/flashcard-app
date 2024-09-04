const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const flashRoutes = require("./routes/flashcardRoutes");
require("dotenv").config();
const PORT = process.env.PORT || 6000;
const corsOptions = {
  origin: "http://localhost:5173",
};
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/api/", flashRoutes);
mongoose.connect(process.env.MONGO_URI, { dbName: "flashcards-app" });
const database = mongoose.connection;
database.once("open", () => {
  console.log("connected to MONGODB");
});

app.listen(PORT, process.env.host, () => {
  console.log("listening to port : " + PORT);
});
