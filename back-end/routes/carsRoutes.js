const carsSchema = require('../models/carsSchema')


const saveCars =(app) => {

    app.post('/car' , async(req, res) => {
      let {carname, carcolor} = req.body
      try{
        let cars = new carsSchema ({
            carname , carcolor
        })
        const carSaved = await cars.save()
         
        res.send({massage:"Car saved", carSaved})
    }catch (error) {
        console.error("post error", error)
        res.send({massage:"post error"}).status(404)
    }
    })


    app.get('/cars' , async(req,res) => {
try {
    const findCars = await carsSchema.find()
    res.send(findCars)
}catch(error) {
    console.log('error', error)
}
    })
}

module.exports = {saveCars}