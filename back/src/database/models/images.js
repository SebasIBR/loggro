const mongoose = require("mongoose")

const ImagesScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        filename: {
            type: String
        },
        url: {
            type: String,
            unique: true
        },
        date: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("images", ImagesScheme)