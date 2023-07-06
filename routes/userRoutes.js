const express = require("express");

const {
  home,
  createUser,
  getUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUser);

module.exports = router;
