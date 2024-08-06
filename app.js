require('dotenv').config({ path: './.env' });
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/connect')
const compnentRouter = require('./routes/componentroutes');

const app = express();

//body-parser set-up
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// routes setup
app.use('/component',compnentRouter);

app.get('/home',(req,res)=>{
    res.json("home")
})





app.listen(3000, () => {
    console.log("server is running at port-3000 ");
})
