const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");

const verifyMiddleware = require("../middlewares/verifyMiddleware");
const jwtMiddleware = require("../middlewares/jwtMiddleware");

router.post("/authors", authorController.createAuthor);

router.post(
    "/login",
    jwtMiddleware.verifyEmailPass,
    authorController.authorLogin
);

router.post(
    "/blogs",
    verifyMiddleware.authorChecker,
    jwtMiddleware.verifytoken,
    blogController.createBlog
);

router.get(
    "/blogs",
    verifyMiddleware.verifyId,
    jwtMiddleware.verifytoken,
    blogController.getBlogs
);

router.put(
    "/blogs/:blogId",
    verifyMiddleware.verifyId,
    jwtMiddleware.verifytoken,
    jwtMiddleware.authorizedAuthor,
    blogController.updateBlogs
);

router.delete(
    "/blogs/:blogId",
    verifyMiddleware.verifyId,
    jwtMiddleware.verifytoken,
    jwtMiddleware.authorizedAuthor,
    blogController.deleteBlog
);

router.delete(
    "/blogs",
    verifyMiddleware.verifyId,
    jwtMiddleware.verifytoken,
    jwtMiddleware.authorizedAuthor,
    blogController.deleteBlogsByQuery
);




router.get('*', async function(req, res) {
    return res.send("Welcome")
});

module.exports = router;