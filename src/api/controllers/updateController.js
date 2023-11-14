const Post = require("../models/postModel");

exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await Post.findByIdAndUpdate(postId, req.body, { new: true });
        if (!updatedPost) {
            res.status(404).json({ message: "Post not found" });
        } else {
            res.status(200).json(updatedPost);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
