# Simple RESTful API in Node and Express

Using the new Express 4.0 Router to build an API

## Requirements

- Node and npm

## Installation

- Clone the repo: `git clone git@github.com:lfordyce/node-rest-api`
- cd into repo: `cd /node-rest-api/`
- Install dependencies: `npm install`
- Start the server: `node server.js`

## Testing the API
Test the API using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

### Alternate Testing: 

- Once `node server.js` is running open a new command line/terminal and enter: 
- For POST: `curl -X POST -H "Content-Type: application/json" -d '{ "id": 1, "body" : "Add another note" }' "http://localhost:3000/notes/"`.
- For GET: `curl -X GET -H "Content-Type: application/json" "http://localhost:3000/notes/"`.
- For GET /notes/{:id}: `curl -X GET -H "Content-Type: application/json" "http://localhost:3000/notes/1"`.
- For DELETE: `curl -X DELETE -H "Content-Type: application/json" "http://localhost:3000/notes/1"`.
- For PUT: `curl -X PUT -H "Content-Type: application/json" -d '{ "id": 2, "body" : "This is an updated note." }' "http://localhost:3000/notes/2"`
