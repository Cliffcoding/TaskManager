const express = require('Express');

const router = express.Router();
const knex = require('../queries/knex');
const queries = require('../queries/user_queries');

router.post('/', (req, res, next) => {
	console.log(req.body);
	res.json({
		meesage: 'In here',
	});
});
module.exports = router;
