// commentModel.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'Post', // Assuming 'Post' is the model for posts
        required: true
    }
});

module.exports = mongoose.model('Comment', commentSchema);
