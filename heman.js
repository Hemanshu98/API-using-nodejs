const mongoose = require('mongoose')


const hemanSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
   contact: {
        type: Number,
        required: true
        
    }

})

module.exports = mongoose.model('Heman',hemanSchema)