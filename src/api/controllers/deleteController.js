const Post = require("../models/postModel");

exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            res.status(404).json({ message: "Post not found" });
        } else {
            res.status(204).send(); 
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
