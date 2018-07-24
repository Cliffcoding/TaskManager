// routes in express need an Express router!
const express = require('Express')
const router = express.Router()

router.get('/test', () => {res.send({'msg': 'test success'})})

module.exports = router
