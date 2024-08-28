import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true },

    details: { 
        type: String, 
        required: true },

    createdDate: { 
        type: String, 
        required: true }
});

export default mongoose.model ("Note", noteSchema);