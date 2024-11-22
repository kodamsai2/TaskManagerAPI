const tasksRoutes = require('express').Router();
const tasksData = require('../tasks.json');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');


tasksRoutes.use(bodyParser.urlencoded({extended: false}));
tasksRoutes.use(bodyParser.json());


// Retrieve all tasks.
tasksRoutes.get('/', (req, res) => {
    res.status(200);
    res.send(tasksData);
});

//Retrieve a single task by its ID.
tasksRoutes.get('/:taskId', (req, res) => {
    let allTasks = tasksData.tasks;
    let taskIdPassed = req.params.taskId;
    let result = allTasks.filter(val => val.taskId == taskIdPassed);

    res.status(200).send(result);
});

//Create a new task.
tasksRoutes.post('/', (req, res) => {
    const taskDetails = req.body;
    let writepath = path.join(__dirname, '..', 'tasks.json');
    let tasksDataModified = tasksData;
    tasksDataModified.tasks.push(taskDetails);
    fs.writeFileSync(writepath, JSON.stringify(tasksDataModified),{encoding: 'utf-8', flag: 'w'});
    res.status(200).send("task has been added successfully");
});

//Delete a task by its ID.
tasksRoutes.delete('/:taskId', (req, res) => {
    let allTasks = tasksData
    let tasksDataModified;
    let taskIdPassed = req.params.taskId;
    let writepath = path.join(__dirname, '..', 'tasks.json');
    let result = allTasks.find(val => val.taskId == taskIdPassed);
    
    if(!result) {
        res.status(404).send("invaild taskId");
    } else{
        for(let i = 0; i < allTasks.length; i++) {
            if(allTasks[i].taskId == taskIdPassed) {
                allTasks.splice(i, 1);
                tasksDataModified = allTasks;
                break;
            }
        }
        fs.writeFileSync(writepath, JSON.stringify(tasksDataModified),{encoding: 'utf-8', flag: 'w'});
        res.status(200).send(`task with ID ${taskIdPassed} has been successfully deleted.`);

}});



module.exports = tasksRoutes;
