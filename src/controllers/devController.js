import mongoose from 'mongoose';
import {DeveloperSchema} from '../models/devModel.js'

const Developer = mongoose.model('Developer', DeveloperSchema);


export const addNewDeveloper = (async (req, res) => {
    try {
        if (
            !req.body.firstName ||
            !req.body.lastName ||
            !req.body.email ||
            !req.body.company ||
            !req.body.phone ||
            !req.body.message
        ) {
            return res.status(400).send({
                message: 'Must Send all required fields: firstName,' +
                    'lastName, email,company,phone,message ',
            })
        }
        const newDeveloper = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            company: req.body.company,
            phone: req.body.phone,
            message: req.body.message,
        }
        const developer = await Developer.create(newDeveloper);
        return res.status(201).send(developer);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

});

export const getDevelopers = (async (req, res) => {
    try {
        const developers = await Developer.find({});
        return res.status(200).json({
            count: developers.length,
            data: developers
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export const getDeveloperWithID = (async (req, res) => {
    try {

        const {developerId} = req.params;

        const developer = await Developer.findById(developerId);

        return res.status(200).json(developer);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export const updateDeveloper = (async (req, res) => {
    try {
        if (
            !req.body.firstName ||
            !req.body.lastName ||
            !req.body.email ||
            !req.body.company ||
            !req.body.phone ||
            !req.body.message
        ) {
            return res.status(400).send({
                message: 'Must Send all required fields: firstName,' +
                    'lastName, email,company,phone,message ',
            })
        }

        const {developerId} = req.params;
        const result = await Developer.findByIdAndUpdate(developerId, req.body);
        if (!result) {
            return res.status(404).json({message: 'developer not found'});
        }

        return res.status(200).send({message: 'developer updated successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

});

export const deleteDeveloper = (async (req, res) => {
    try {
        const {developerId} = req.params;

        const result = await Developer.findByIdAndDelete(developerId);
        if (!result) {
            return res.status(404).json({message: 'developer not found'});
        }

        return res.status(200).send({message: 'developer deleted successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});
