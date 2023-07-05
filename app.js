require("dotenv").config(); //enabled dotenv

const express = require("express");
// import express from 'express';

const cors = require("cors"); // allow cross origin request

const connectToDb = require("./config/db.js");

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const app = express();

// init connection to db

connectToDb();

app.get("/", (req, res) => {
  res.send("Hello world !");
});

module.exports = app; // no need to enable module in package in json
