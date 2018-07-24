const express = require('express')
const app = express()
const morgan = require('morgan') 
// morgan logger logs: GET /api/v1/users/test 200 4.507 ms - 22

const users = require('./routes/users')
const projects = require('./routes/projects')

// middleware
app.use(morgan('dev'))
// const user_projects NOT HERE YET

// routes, they need a router!
app.use('/api/v1/users', users)
app.use('/api/v1/projects', projects)

app.get('/', (req, res) => { res.send('Welcome to your express app...') })

app.listen(3000, ()=>{console.log('listening on port 3000')})

if(app.get('env') === 'development'){
    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(err.status || 500)
            .json({ 'message': err.message, error: err})
    })
}

app.use((err, req, res, next) => {
    res.status(err.status || 500)
	.json({'message': err.message})
})

module.exports = app
