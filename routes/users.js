// routes in express need an Express router!
const express = require('Express');

const router = express.Router();
const knex = require('../queries/knex');
const queries = require('../queries/user_queries');


router.get('/test', (req, res) => {
	res.send({ msg: 'test success' });
});

router.get('/all', async (req, res) => {
	const users = await queries.getAll();
	return res.json(users);
});

router.get('/:username', async (req, res) => {
	const username = req.params.username;
	const projects = await queries.getProjects(username);
	return res.json(projects);
});

router.get('/:username/project/:id', async (req, res) => {
	const id = req.params.id;
	const project = await queries.getOneProject(id);
	return res.json(project);
});

module.exports = router;
