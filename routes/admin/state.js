const express = require('express')
const {State} = require('../../sequelize')
const utils = require('../../utils')

const router = express.Router()

router.get('/',(req, res)=>{
    State.findAll().then((state) => {
        res.send(utils.createResult(null, state)) 
     }).catch((err) =>{
         res.send(utils.createResult(err, null))
     })
})

router.post('/', (req, res)=>{
    const {name} = req.body
    State.create({name : name}).then((state) => {
        res.send(utils.createResult(null, state))
    }).catch((err) =>{
        res.send(utils.createResult(err, null))
    })
})

module.exports = router
