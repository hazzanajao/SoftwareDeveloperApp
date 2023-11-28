import mongoose from 'mongoose';
import {CompanySchema} from '../models/comModel.js'

const Company = mongoose.model('Company', CompanySchema);


export const addNewCompany = (async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.about ||
            !req.body.services||
            !req.body.location ||
            !req.body.openingPositions ||
            !req.body.contact
        ) {
            return res.status(400).send({
                message: 'Must Send all required fields: name,' +
                    'about, services,location,openingPositions,contact ',
            })
        }
        const newCompany = {
            name: req.body.name,
            about: req.body.about,
            services: req.body.services,
            location: req.body.location,
            openingPositions: req.body.openingPositions,
            contact: req.body.contact,
        }
        const company = await Company.create(newCompany);
        return res.status(201).send(company);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

});

export const getCompanies = (async (req, res) => {
    try {
        const companies = await Company.find({});
        return res.status(200).json({
            count: companies.length,
            data: companies
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export const getCompanyWithID = (async (req, res) => {
    try {

        const {companyId} = req.params;

        const company = await Company.findById(companyId);

        return res.status(200).json(company);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

export const updateCompany = (async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.about ||
            !req.body.services||
            !req.body.location ||
            !req.body.openingPositions ||
            !req.body.contact
        ) {
            return res.status(400).send({
                message: 'Must Send all required fields: name,' +
                    'about, services,location,openingPositions,contact ',
            })
        }

        const {companyId} = req.params;
        const result = await Company.findByIdAndUpdate(companyId, req.body);
        if (!result) {
            return res.status(404).json({message: 'company not found'});
        }

        return res.status(200).send({message: 'company updated successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

});

export const deleteCompany = (async (req, res) => {
    try {
        const {companyId} = req.params;

        const result = await Company.findByIdAndDelete(companyId);
        if (!result) {
            return res.status(404).json({message: 'company not found'});
        }

        return res.status(200).send({message: 'company deleted successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});
