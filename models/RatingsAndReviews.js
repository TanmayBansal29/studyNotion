const mongoose = require("mongoose")

const ratingsAndReviewsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    ratings: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("RatingsAndReviews", ratingsAndReviewsSchema)