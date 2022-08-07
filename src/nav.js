const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("Welcome to my home page");
});

app.get('/about',(req,res)=>{
    res.status(200);
    res.send("Welcome to my home page");
});

app.get('/contact',(req,res)=>{
    res.status(200);
    res.send("Welcome to my contact page");
});

app.get('/temp',(req,res)=>{
    res.status(200);
    res.send("Welcome to my temp page");
});





app.listen(port,()=>{
    console.log(`listining the port no ${port}`);
})