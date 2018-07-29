// Update with your config settings.
module.exports = {
	test: {
		client: 'pg',
		connection: 'postgres://localhost/TaskTracker',
		migrations: {
			directory: `${__dirname}/db/migrations`,
		},
	  	seeds: {
	  		directory: `${__dirname}/db/seeds/test`,
	  	},
  	},
  	development: {
    	client: 'pg',
    	connection: 'postgres://localhost/TaskTracker',
    	migrations: {
			directory: `${__dirname}/db/migrations`,
		},
		seeds: {
			directory: `${__dirname}/db/seeds/developmet`,
		},

  	},
	//	production: {
	//		client: 	'postgresql',
	//		connection: process.ENV.DATABASE_URL,
//		migrations: {
//			directory: __dirname + '/db/migrations',
//		},
//		seeds: {
//			directory: __dirname + '/db/seeds/productions'
//		}
	//	}
};
