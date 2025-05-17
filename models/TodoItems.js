import mongoose from "mongoose";

const tododItemSchema = mongoose.Schema({
    title: { type: String, required: true},
    desc: { type: String, required: true},
});

export const TodoItems = mongoose.model("TodoItems", tododItemSchema);