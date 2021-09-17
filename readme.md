# app.js

app.js is a surprise API built in nodejs with the option to get random responses according to the params the user gives.
There is also an option to watch the history of the previous requests and their responses.
The app is based on OOP concepts to improve Extensibility and Reusability.
The app is designed in a way that saves code duplication by using abstraction and polymorphism in the
surprises objects construction.
There's also an outer JSON file to save the requests history to improve Reliability.


## Installation

To run this project please make sure you have version 14.17.5 of nodeJs or higher and visual studio code.
From your terminal (make sure you stand in the root directory), enter `npm init`.
And then, `npm install express@4.17.1, axios@0.19.2, jest@27.0.6, supertest@6.1.5` to intall the required modules.


## Running the app:

To run the server type `node server.js` from your terminal.
To run these tests it is highly recommended that you will use Postman.
The address for the server is 'http://localhost:3000/api/'.
You can use the postman's method 'get' with the /stats endpoint to get the stats.
You can use the postman's method 'get' with the /surprise endpoint with name, birth_year, and upsidedown params to get random surprising answers.
You can also import the SurpriseApi Commands file which includes all kinds of requests.


## Testing the app:

For your convenience, there are multiple Unit & Integration tests.
To run the test enter `npm run test` in the terminal.