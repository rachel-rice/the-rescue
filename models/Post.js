const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: true,
      },
    cloudinaryId: {
        type: String,
        require: true,
      },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model('Post', PostSchema)