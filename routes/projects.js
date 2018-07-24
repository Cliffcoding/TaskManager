const express = require('Express')
const router = express.Router()

router.get('/test', () => {res.send({'msg': 'test_success'})})

module.exports = router
