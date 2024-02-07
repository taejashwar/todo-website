import mongoose, { Schema } from "mongoose";

const schema = new Schema({

    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "users",
    //     required: true
    // },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    isCompleted: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}

export const Task = mongoose.model("tasks", schema);