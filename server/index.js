// Require libraries
const express = require("express");
const bodyParser = require("body-parser");
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

// Require controller
const controller = require("./controller.js");

// Have express create app
const app = express();
app.use(cors())

// Tell express app to use bodyParser.json() for API endpoints
app.use(bodyParser.json())

// Tell the app to start listening on port 3005
const port = process.env.PORT || 3005
app.listen(port, () => { console.log(`Server listening on port ${port}`) });