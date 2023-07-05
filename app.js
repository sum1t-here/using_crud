require("dotenv").config(); //enabled dotenv

const express = require("express");
// import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world !");
});

module.exports = app; // no need to enable module in package in json
