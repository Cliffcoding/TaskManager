const express = require('Express')
const router = express.Router()
const knex = require('../queries/knex')

router.get('/test', (req, res) => {res.send({'msg': 'test_success'})})


router.get('/all', (req, res) => {
    console.log('test of all');
    let projects = knex('projects').select('*')
    projects.then((found) => {
        console.log(found);
        res.send({'msg': found})
    })
    
})
module.exports = router
