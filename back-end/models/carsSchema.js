const mongoose = require('mongoose')


const carsSchema = mongoose.Schema({
   carname: {
      type: String,
      require: true
   },

   carcolor: {
      type: [String],
      require: true
   }
})


module.exports = mongoose.model('cars', carsSchema)