const express = require('express')
const app = express()
const morgan = require('morgan') 
// morgan logger logs: GET /api/v1/users/est 200 4.507 ms - 22
 
const users = require('./routes/users')

// middleware
process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : null
// const user_projects NOT HERE YET

// routes, they need a router!
app.use('/api/v1/users', users)

app.get('/', (req, res) => { res.send('Welcome to your express app...') })

process.env.NODE_ENV === 'test' ?
app.listen(5001, ()=>{console.log('listening on port 5001')}) :
app.listen(5000, ()=>{console.log('listening on port 5000')})

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