const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
}, {
    timestamps: true
})

//Se crea la coleccion User
module.exports = model('User', userSchema);