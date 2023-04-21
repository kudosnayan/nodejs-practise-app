const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
})

// collection create
const User = new mongoose.model("User", UserSchema)
module.exports = User;