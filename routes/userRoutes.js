const express = require("express");

const {
  home,
  createUser,
  getUser,
  deleteUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
