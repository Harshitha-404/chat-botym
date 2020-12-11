const express = require('express');//using to create server(or)connecting db
const cors  = require('cors');//used to conect multiple platforms(crossorigin)
const bodyParser = require('body-parser');//used to get output in json format i.e,{}
const mysql = require('mysql');
const bearerToken = require('express-bearer-token');
const events = require('./event');//importing file event.js



const connection = mysql.createConnection({
   host : 'localhost',
   port : 3306,
   user : 'root',
   password : 'root',
   database : 'speech',
});

connection.connect();

const port = 8051;

const app = express()
.use(cors())
.use(bodyParser.json())
.use(bearerToken())
.use(events(connection));

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

