import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DeveloperSchema = new Schema({
    firstName: {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    company: {
        type: String,
        required:true,
    },
    phone: {
        type: String,
        required:true,
    },
    message: {
        type: String,
        required:true,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
