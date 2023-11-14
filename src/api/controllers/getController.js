const Post = require("../models/postModel");

exports.getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        if (!post) {
            res.status(404).json({ message: "Post not found" });
        } else {
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
