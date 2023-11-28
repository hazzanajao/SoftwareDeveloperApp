import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CompanySchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    about: {
        type: String,
        required:true,
    },
    services: {
        type: String,
        required:true,
    },
    location: {
        type: String,
        required:true,
    },
    openingPositions: {
        type: String,
        required:true,
    },
    contact: {
        type: String,
        required:true,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
