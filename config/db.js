const { config } = require('dotenv')
const mongoose = require('mongoose')

const config_ = require('./config.js')

const dburl = config_.db.url;

mongoose.connect(dburl)
.then(()=>{
   console.log("connected");
})
.catch((err)=>{
  console.log(err);
  process.exit(1);
})

