const mongoose=require('mongoose')

  const sensorDataSchema = new mongoose.Schema({
    Date:Date,
    heartbeat:Number,
    sleep:Number,
    steps: Number,
    glucose:Number,
    bp:Number,
    oxygen:Number
  
  })
  
  const sensorData=mongoose.model('sensorData',sensorDataSchema,'sensorData')

  module.exports={sensorDataSchema,sensorData}