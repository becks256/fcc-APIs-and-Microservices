/* 
Author: Daniel M Becker
For: freeCodeCamp APIs and Microservices Projects - Timestamp Microservice
*/

const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const timestampService = require('./TimestampService.js');
const svrPort = 8443;

const app = express();
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'))

app.get('/api/timestamp/', (req, res) => {
    let date = new Date();
    return res.json({
        'unix': date.getTime(), 
        'utc': date.toUTCString()
    });
})
app.get('/api/timestamp/:date_string', timestampService);

app.listen(svrPort, () => {
    console.log(`Server Listening on ${svrPort}`)
})