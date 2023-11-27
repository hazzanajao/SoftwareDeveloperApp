import {
    addNewDeveloper,
    getDevelopers,
    getDeveloperWithID,
    updateDeveloper,
    deleteDeveloper
} from "../controllers/devController.js";

const routes = (app) => {
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
}

export default routes;
