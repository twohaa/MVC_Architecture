const express = require("express");
const {
  getUsers,
  postUsers,
  gethome,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/", gethome);

router.get("/users", getUsers);

router.post("/users", postUsers);

module.exports = router;
