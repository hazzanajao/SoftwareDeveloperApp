/***
 * All of these not necessary 'cos I have imported it to devRoutes as my general routes
 * *************************************************************************************
import {
    addNewCompany,
    getCompanies,
    getCompanyWithID,
    updateCompany,
    deleteCompany
} from "../controllers/comController.js";

const routes = (app) => {
    app.route('/company')
        // GET all Companies
        .get((req,res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getCompanies)
        // POST a new company
        .post(addNewCompany);

    app.route('/company/:companyId')
        //GET a company
        .get(getCompanyWithID)
        //UPDATE a company
        .put(updateCompany)
        //DELETE a company
        .delete(deleteCompany)
}

export default routes;
 ************************************/
