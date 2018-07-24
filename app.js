const express = require('express')
const app = express()
// missing middleware for app.use()?


const users = require('./routes/users')
const projects = require('./routes/projects')
// const user_projects NOT HERE YET

// routes, need a router!
app.use('/users', users)
app.use('/projects', projects)

app.get('/', (req, res) => { res.send('Welcome to your express app...') })
app.listen(3000, ()=>{console.log('listening on port 3000')})

module.exports = app
