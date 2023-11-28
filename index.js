import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/devRoutes.js"
import {mongoDB_URL, PORT} from "./config.js";

const app = express();

/*mongodb connection to devDb */
mongoose.Promise = global.Promise;


/*using mongoose to setup our mongodb connect with assigned PORT No: 5000*/
mongoose.connect(mongoDB_URL)
    .then( () => {
        console.log('App connected to database');
    })
    .catch((error) => {
        console.log(error);
    });

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Backend server is running on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(` App is listening to port: ${PORT}`);
    console.log(` Developer : H.Ajao has completed the backend Server Development`);
});

/*******************************************
* useful in-built node methods to be used .
* //Hint:  get(a,(b, c) => b.send(`any message` ))
* (req, res) => res.send( ` `)
* res.send()
* listen()
* console.log()
* *****************************************/
