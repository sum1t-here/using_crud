require("dotenv").config(); //enabled dotenv

const express = require("express");
// import express from 'express';

const cors = require("cors"); // allow cross origin request

const connectToDb = require("./config/db.js");

const app = express();
// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// init connection to db

connectToDb();

const userRoutes = require("./routes/userRoutes.js");

app.get("/", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello world !");
// });

module.exports = app; // no need to enable module in package in json
