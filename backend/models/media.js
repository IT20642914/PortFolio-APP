const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
