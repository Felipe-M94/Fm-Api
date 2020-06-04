const mongoose = require('mongoose')
const { Schema } = mongoose

const registerSchema = new Schema ({
    board: String,
    bodytype: String
})

mongoose.model('registrations', registerSchema)