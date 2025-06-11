const express = require("express");
const json = require("express").json();
const router = require("./routes/routes");
const cors = require("cors");

const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const corsOptions = {
  origin: process.env.CLIENT_URL,
};
app.use(cors(corsOptions));

app.use(json);
app.use("/", router);

mongoose
  .connect(`${process.env.DB_URI}`, {
    serverSelectionTimeoutMS: 5000,
    secureContext: false,
  })
  .then(() => {
    console.log("Db connection established...");
    app.listen(3000, async (req, res) => {
      console.log("Server running at port 3000");
    });
  })
  .catch((err) => {
    console.log("DB Connection failed ", err);
  });
