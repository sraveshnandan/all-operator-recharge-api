require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// importing routes

const planRoutes = require("./routes/plan.routes");

//using routes

app.use("/api/v1", planRoutes);

module.exports = app;
