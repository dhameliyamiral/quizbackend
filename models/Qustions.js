const mongoose = require('mongoose')
const AdminSchema = new mongoose.Schema({
    Question: {
        type: String,
        required: true
    },
    Option1: {
        type: String,
        required: true
    },
    Option2: {
        type: String,
        required: true
    },
    Option3: {
        type: String,
        required: true
    },
    Option4: {
        type: String,
        required: true
    },
    Answer: {
        type: String,
        required: true
    },
    CoursesId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Course"
    }


}, { timestamps: true })
const Questions = mongoose.model('Questions', AdminSchema)
module.exports = { Questions }

