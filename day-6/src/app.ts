// Importing Express, a popular web application framework for Node.js
import Express from "express";

// Creating an instance of Express and assigning it to the variable "app"
const app: Express.Application = Express();

// Defining the hostname and port for the server to run on
const hostname: string = "localhost";
const port: number = 8000;

// Defining a route for the server to respond to GET requests at the path "/greet"
app.get("/greet", (request: Express.Request, response: Express.Response) => {
    // Calling the "greetHandler" function and passing in the request and response objects
    greetHandler(request, response);
});

// Defining the function "greetHandler" to handle the "/greet" route
function greetHandler (request: Express.Request, response: Express.Response) {

    // Extracting the value of the "name" query parameter from the request object
    let name = request.query.name;

    // Checking if the "name" query parameter has a value
    if (name != "") {
        // Sending a response to the client with the message "Hello, [name]!"
        response.send(`Hello, ${name}!`);
    } else {
        // Sending a response to the client with the message "Hello, Guest!"
        response.send(`Hello, Guest!`);
    }
}

// Starting the server and listening for incoming requests on the specified hostname and port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});