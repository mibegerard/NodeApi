// commentController.js
const Comment = require("../models/commentModel");

exports.listAllComments = async (req, res) => {
    try {
        const postId = req.params.post_id;
        const comments = await Comment.find({ post_id: postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.createAComment = async (req, res) => {
    const newComment = new Comment({
        name: req.body.name,
        message: req.body.message,
        post_id: req.params.post_id
    });

    try {
        const comment = await newComment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getAComment = async (req, res) => {
    try {
        const commentId = req.params.comment_id;
        const comment = await Comment.findById(commentId);
        if (!comment) {
            res.status(404).json({ message: "Comment not found" });
        } else {
            res.status(200).json(comment);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateAComment = async (req, res) => {
    try {
        const commentId = req.params.comment_id;
        const updatedComment = await Comment.findByIdAndUpdate(commentId, req.body, { new: true });
        if (!updatedComment) {
            res.status(404).json({ message: "Comment not found" });
        } else {
            res.status(200).json(updatedComment);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteAComment = async (req, res) => {
    try {
        const commentId = req.params.comment_id;
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            res.status(404).json({ message: "Comment not found" });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
