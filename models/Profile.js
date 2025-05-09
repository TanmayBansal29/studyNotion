const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    gender: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    profession: {
        type: String
    },
    organization: {
        type: String
    },
    about: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: Number,
        trim: true
    }
})

module.exports = mongoose.model("Profile", profileSchema)