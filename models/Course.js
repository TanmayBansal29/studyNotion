const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
    },
    courseDescription: {
        type: String
    },
    courseInstuctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    whatYouWillLearn: {
        type: String
    },
    courseContent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section"
        }
    ],
    price: {
        type: Number
    },
    thumbnail: {
        type: String
    },
    ratingsAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingsAndReviews"
        }
    ],
    tags: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    },
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ]
})

module.exports = mongoose.model("Course", courseSchema)