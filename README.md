# node-rest-api
REST API using Node.js 

# Description

This project is a simple REST API implementation which uses 
  -> Node .js :- Express and Mongoose  
  -> MongoDB
  
Server.js -> runs at 3000, for accepting connections. We register the routes that will correspond to the API's routes and listen for them.

Route.js -> Stores the API routes and redirects them to the correct functions for the correct API paths.

Controller.js -> Has all the functions which interacts with the DB and performs the CRUD actions. All I/O actions are in JSON format

Models.js -> Stores the model schema which will be stored and returned from the DB while the transactions occur. 

# Directories 

-root

    -->controllers
    
       -->controller.js
       
    -->routes
    
       -->route.js
       
    -->models
    
       -->model.js
       
    -package.json
    
    -server.js

# Screenshots 

![create](https://user-images.githubusercontent.com/13213436/34451273-46b84cdc-ed47-11e7-8359-3dc8118ff554.png)
![read_single](https://user-images.githubusercontent.com/13213436/34451276-474a8a7a-ed47-11e7-9e80-f4dfcb65417c.png)
![update](https://user-images.githubusercontent.com/13213436/34451277-477b1c08-ed47-11e7-9f0f-4364b48e41ce.png)
![delete](https://user-images.githubusercontent.com/13213436/34451274-46e87380-ed47-11e7-9086-6e494f7abc3a.png)
