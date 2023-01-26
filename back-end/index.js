const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT
const URI = process.env.DATA_BASE
const mongoose = require('mongoose')
const { saveCars } = require('./routes/carsRoutes')


app.use(express.json())
app.use(express.urlencoded({extended: "false"}))
app.use(cors())
mongoose.connect(
    URI,{
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }
  ).then(res => console.log('("Connected")')).catch(err => console.log(err))
  console.log("URI",URI)
  mongoose.set('strictQuery', true)
saveCars(app)


app.listen(port, () => console.log(`App listening on port ${port}`))