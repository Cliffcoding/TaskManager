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

