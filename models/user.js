
const mongoose=require('mongoose')
const {sensorDataSchema} =require('./sensorData')

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  gender: String,
  data:[sensorDataSchema]

});

// const User=mongoose.model('User',userSchema,'users')

module.exports=mongoose.model('User', userSchema,'users');