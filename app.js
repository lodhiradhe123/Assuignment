require('dotenv').config({ path: './.env' });
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/connect')
const compnentRouter = require('./routes/componentroutes');
const userRouter = require('./routes/users');
const cors = require('cors');


const app = express();

//body-parser set-up
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());


// routes setup
app.use('/component', compnentRouter);
app.use('/user',userRouter);




app.listen(3000, () => {
    console.log("server is running at port-3000 ");
})
