
const path = require('path');
const hbs = require('hbs');
const express = require('express');

const app = express();
// to set viw engin
app.set("view engin","hbs");
const staticPath = path.join(__dirname,'../public');
// builtin middleware
app.use(express.static(staticPath));

// template engine root
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/',(req,res)=>{
    res.send("Hello from the express");
});


const server = app.listen(3000,()=>{
    console.log("listining the port : 8000");
})