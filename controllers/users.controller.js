const users = require("../models/users.model");
const path = require("path");

exports.gethome = (req, res) => {
  res.send("Hello");
};

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.postUsers = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(200).json({
    success: true,
    users,
  });
};
