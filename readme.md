In src folder

    app.js -->main file
    
    tasks.json --> In-memory data store to store the tasks
    


To run the node.js application, cd to src folder in terminal 
    node app.js -->command



In browser
    http://localhost:3000/ --> Welcome Page.

    http://localhost:3000/tasks --> To Retrieve all tasks.

    http://localhost:3000/tasks/1 --> To Retrieve a single task by its ID(1).

In Postman

    --> To Create a new task.

            POST http://localhost:3000/tasks 

            Added this, In body
            {
            "taskId": 3,
            "title": " build node.js application",
            "description": " task manager API ",
            "completionStatus": "False"
            }

    --> Delete a task by its ID(3).

            DELETE http://localhost:3000/tasks/3 

 


