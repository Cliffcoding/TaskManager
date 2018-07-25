# TaskManager

dependencies: express, mocha, chai, knex, pg

Postgres: created 2 new databases, one for development and production, one for testing.

git ignore: gitignore node

First Steps: created instance of express, invoke express with app variable. app get /, app listen on 3000. server up with $ nodemon. 

/user and /projects rotues working with Router(). 
/users/test: ok, /projects/test: ok

Added morgan logger, logs GET /api/v1/users/test 200 5.5ms - 22

Added error handler
