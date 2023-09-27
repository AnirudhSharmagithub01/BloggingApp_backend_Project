const express = require('express');
const app = express();

require('dotenv').config();

const Port = process.env.PORT || 4000;

//middleware
app.use(express.json());

// import routes
const routes = require('./routes/Blog');
//and use routes
app.use("/api/v1",routes)

// launch app
app.listen(Port,(req,res) =>{
    console.log(`Server Started successfully At port no ${Port}`);
})

// import database and connect
const dbConnect = require("./config/database");
dbConnect;


// default route
app.get('/',(req,res) =>{
    res.send("<h1>This is HomePage Baby 😎</h1>");
})
