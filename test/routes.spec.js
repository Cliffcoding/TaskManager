// tests!!
process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')

chai.use(chaiHttp)

describe('GET /api/v1/users/test', () => {
    it('return JSON, msg: test success', (done) => {
    	chai.request(server)
	    .get('/api/v1/users/test')
	    .end((err, res) => {
			res.should.be.json
			res.should.have.status(200)
			res.body.should.have.property('msg')
			res.body.msg.should.equal('test success')
			done()
		})
	})
})

describe('GET all users', () => {
	it('returns an array of users', (done) => {
		chai.request(server)
		.get('/api/v1/users/all')
		.end((err, res) => {
			res.body[0].should.have.property('id')
			res.body[0].should.have.property('username')
			res.body[0].should.have.property('password')
			res.body.should.be.a('array');
			res.should.have.status(200);
			done()
		})
	})
})

describe('GET one user with projects', () => {
	it('returns one user', (done) => {
		chai.request(server)
		.get('/api/v1/users/Billy')
		.end((err, res) => {
			res.body.should.have.property('id')
			res.body.should.have.property('username')
			res.body.should.have.property('password')
			res.body.should.have.property('projects')
			res.body.projects.should.be.a('array')
			res.should.be.json
			res.should.have.status(200);
			done()
		})
	})
})
