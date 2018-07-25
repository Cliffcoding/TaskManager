// tests!!
process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app.js')

chai.use(chaiHttp)

describe('GET test', () => {
	after(function (done) {
        app.server.close();
        done();
    });
    it('return JSON, msg: test success', (done) => {
    	chai.request(app.server)
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

describe('GET routes for users', () => {
	after(function (done) {
        app.server.close();
        done();
    });
	it('/api/v1/users/all returns an array of users', (done) => {
		chai.request(app.server)
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
	it('/api/v1/users/Billy returns one user, Billy', (done) => {
		chai.request(app.server)
		.get('/api/v1/users/Billy')
		.end((err, res) => {
			res.body.should.have.property('id')
			res.body.should.have.property('username')
			res.body.username.should.equal('Billy')
			res.body.should.have.property('password')
			res.body.should.have.property('projects')
			res.body.projects.should.be.a('array')
			res.should.be.json
			res.should.have.status(200);
			done()
		})
	})
	it('/api/v1/users/Billy/project/1 returns one full project with List + Tasks', (done) => {
		chai.request(app.server)
		.get('/api/v1/users/Billy/project/1')
		.end((err, res) => {
			res.body.should.have.property('id')
			res.body.should.have.property('name')
			res.body.should.have.property('description')
			res.body.should.have.property('lists')
			res.body.lists[0].should.have.property('tasks')
			res.body.lists.should.be.a('array')
			res.body.lists[0].tasks.should.be.a('array')
			res.should.be.json
			res.should.have.status(200);
			done()
		})
	})

})
