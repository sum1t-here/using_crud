const User = require("../models/userModel.js");
exports.home = (req, res) => {
  res.send("Hello world !");
};

exports.createUser = async (req, res) => {
  // extract info
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const userExists = await User.findOne({ email }).exec();

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json({
      success: true,
      message: "User created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Users data retrieved",
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
