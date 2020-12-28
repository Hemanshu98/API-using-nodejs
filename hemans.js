const express = require('express')
const router = express.Router()
const Heman = require('../models/heman')


router.get('/', async(req,res) => {
    try{
           const hemans = await Heman.find()
           res.json(hemans)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const heman = await Heman.findById(req.params.id)
           res.json(heman)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const heman = new Heman({
        name: req.body.name,
        age: req.body.age,
        contact: req.body.contact
    })

    try{
        const a1 =  await heman.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const heman = await Heman.findById(req.params.id) 
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router