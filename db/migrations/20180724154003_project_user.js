exports.up = (knex, Promise) => (
	Promise.all([
		knex.schema.createTable('users', (table) => {
			table.increments('id').primary()
			table.string('username').notNullable().unique()
			table.string('password').notNullable().unique()
		}),
		knex.schema.createTable('projects', (table) => {
			table.increments('id').primary
			table.string('name').notNullable().unique()
			table.string('description')
			table.timestamp('created_at').defaultTo(knex.fn.now())
		}),
		knex.schema.createTable('user_project', (table) => {
			table.increments('id').primary();
			table.integer('user_id').references('users.id').unsigned().onDelete('cascade');
			table.integer('project_id').references('projects.id').unsigned().onDelete('cascade');
        }),
        knex.schema.createTable('lists', (table) => {
            table.increments('id').primary()
            table.string('title') // needs this to be unique with in its project reference
            table.integer('project_id').references('projects.id').unsigned().onDelete('cascade');
        }),
        knex.schema.createTable('cards', (table) => {
            table.increments('id').primary()
            table.string('task')
            table.integer('list_id').references('lists.id').unsigned().onDelete('cascade');
        })  
	])
)

exports.down = (knex, Promise) => (
	Promise.all([
        knex.schema.dropTableIfExists('cards'),
        knex.schema.dropTableIfExists('lists'),
        knex.schema.dropTableIfExists('user_project'),
		knex.schema.dropTableIfExists('users'),
		knex.schema.dropTableIfExists('projects'),
    
    ]))