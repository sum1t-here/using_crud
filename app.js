require("dotenv").config(); //enabled dotenv

const express = require("express");
// import express from 'express';

const connectToDb = require("./config/db.js");

const app = express();

// init connection to db

connectToDb();

app.get("/", (req, res) => {
  res.send("Hello world !");
});

module.exports = app; // no need to enable module in package in json
