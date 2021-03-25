require('dotenv').config()
const mongoose=require('mongoose')
const express = require('express')
const app = express()

const cors=require('cors')

app.use(cors())

console.log(process.env.DATABASE)
const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );

  mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connnection successful!'));




// const testUser= new User({
//     name:'April',
//     age: 21,
//     weight:48,
//     height: 160,
//     gender: 'female'

// })



// fetch('http://localhost:4000/').then(res=>res.json()).then(res=>{
// const tempdata = new sensorData({
//   Date:new Date(),
//   heartbeat:res.heartbeat,
//   sleep:res.sleep,
//   steps: res.steps,
//   glucose:res.glucose,
//   bp:res.bp,
//   oxygen:res.oxygen
// })
// testUser.data.push(tempdata)
// testUser.save()
// console.log(tempdata)

// })



// Routes
app.use('/', require('./routes/index.js'))


app.listen(4000)