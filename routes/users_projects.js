// routes in express need an Express router!
const express = require('Express')
const router = express.Router()
const knex = require('../queries/knex')

router.get('/test', (req, res) => {res.send({'msg': 'test success'})})


router.get('/all', (req, res) => {
    console.log('test of all');
    let userProjects = knex('user_project').select('*')
    userProjects.then((found) => {
        console.log(found);
        res.send({'msg': found})
    })
    
})
module.exports = router
