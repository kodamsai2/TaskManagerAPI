const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('express').Router();
const tasksInfo = require('./routes/tasksInfo');
    
const app = express();
app.use(cors());
app.use(routes);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = 3000;

//Welcome page
routes.get('/', (req, res) => {
    res.status(200).send("Welcome to Task Manager Application")
});

routes.use('/tasks',tasksInfo);

app.listen(PORT, (error) => {
    if(!error) {
        console.log("Server is succesfuly started")
    } else{
        console.log("Some error has occured")
    }
});




