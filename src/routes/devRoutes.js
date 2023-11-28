import {
    addNewDeveloper,
    getDevelopers,
    getDeveloperWithID,
    updateDeveloper,
    deleteDeveloper
} from "../controllers/devController.js";
import {
    addNewCompany,
    deleteCompany,
    getCompanies,
    getCompanyWithID,
    updateCompany
} from "../controllers/comController.js";

const routes = (app) => {
    /**
     *Implemented Developer Routes here
     ************************************/
    app.route('/developer')
        // GET all developers
        .get((req,res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getDevelopers)
        // POST a new developer
        .post(addNewDeveloper);

    app.route('/developer/:developerId')
        //GET a developer
        .get(getDeveloperWithID)
        //UPDATE a developer
        .put(updateDeveloper)
        //DELETE a developer
        .delete(deleteDeveloper)

    /***
     *Implemented Company Routers Here
     ***********************************/
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
