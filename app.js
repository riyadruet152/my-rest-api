const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRouter = require('./routes/user.route')

require('./config/db');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.use('/users',userRouter);

//home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

//user route





//route not found

app.use((req,res)=>{
    res.status(404).json({message:"route not found"})
})


//server error

app.use((err, req, res, next)=>{
    res.status(500).json({message:"smothing broke"})
})

module.exports = app;
