const express = require("express");
// 1st  const postContollers = require("../controllers/post");
const {getPosts, createPost} = require("../controllers/post");

const validator = require("../validator");

const router = express.Router();

// 1st  router.get("/", postContollers.getPosts);
// 1st  router.post("/post", validator.createPostValidator, postContollers.createPost);

router.get("/", getPosts);
router.post("/post", validator.createPostValidator, createPost);

module.exports = router;
