const express = require('express')
const { City } = require('../../sequelize')
const utils = require('../../utils')

const router = express.Router()

router.get('/:id',(req,res) =>{
    const stateId = req.params.id
    City.findAll({where : {state_id : stateId }}).then((cities) =>{
        res.send(utils.createResult(null, cities)) 
    }).catch((err) =>{
        res.send(utils.createResult(err, null))
    })      
})

router.post('/:id',(req,res) => {
    const { name , code} = req.body
    City.create({
        state_id : req.params.id,
        name : name,
        code : code
    }).then((cities) =>{
        res.send(utils.createResult(null, cities)) 
    }).catch((err) =>{
        res.send(utils.createResult(err, null))
    })     
})

module.exports = router