import mongoose, { Schema } from "mongoose";

const schema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        select: false,
        minLength: [6, "Password is too short"]
    }
})

mongoose.models = {}

export const User = mongoose.model("users", schema);