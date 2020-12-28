const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Hemanshu'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const hemanRouter = require('./routes/hemans')
app.use('/hemans',hemanRouter)

app.listen(9000, () => {
    console.log('Server started')
})