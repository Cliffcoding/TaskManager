
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => knex('project').del())
      .then(() => knex('user_project').del())
        .then(() => knex('user').insert(userSeeds))
          .then(() => knex('project').insert(projectSeeds))
            .then(() => knex('user_project').insert(userProjectSeeds))
              .then(() => knex('list').insert(lists))
                .then(() => knex('task').insert(tasks))
};

const userSeeds = [
	{
		username: 'Billy',
		password: 'test321' 
	},
	{
		username: 'Bob',
		password: 'test321' 
	},
	{
		username: 'Joe',
		password: 'test321' 
	},
	{
		username: 'Taylor',
		password: 'test321' 
	},
	{
		username: 'test',
		password: 'test321' 
	}
]

const projectSeeds = [
  {
    name: "test project",
    description: 'this projects is just a bore'
  },
  {
    name: "my project",
    description: 'this projects is just my project'
  },
  {
    name: "another project",
    description: 'this projects is just another project'
  },
  {
    name: "the project",
    description: 'this projects is just the project'
  }
]

const userProjectSeeds = [
  {
    user_id: 1,
    project_id: 1
  },
  {
    user_id: 2,
    project_id: 1
  },
  {
    user_id: 1,
    project_id: 2
  },
  {
    user_id: 1,
    project_id: 3
  },
  {
    user_id: 3,
    project_id: 1
  },
  {
    user_id: 5,
    project_id: 1
  },
  {
    user_id: 2,
    project_id: 2
  },
  {
    user_id: 4,
    project_id: 3
  },
  {
    user_id: 3,
    project_id: 2
  }
]

const lists = [
  {
    project_id: 1,
    title: 'To do',
    order: 0
  },
  {
    project_id: 1,
    title: 'Doing',
    order: 1
  },
  {
    project_id: 1,
    title: 'Done',
    order: 2
  },
  {
    project_id: 1,
    title: 'Stretch',
    order: 3
  },
  {
    project_id: 2,
    title: 'To do',
    order: 0
  },
  {
    project_id: 2,
    title: 'Doing',
    order: 1
  },
  {
    project_id: 2,
    title: 'Done',
    order: 2
  },
  {
    project_id: 2,
    title: 'Stretch',
    order: 3
  },
  {
    project_id: 3,
    title: 'To do',
    order: 0
  },
  {
    project_id: 3,
    title: 'Doing',
    order: 1
  },
  {
    project_id: 3,
    title: 'Done',
    order: 2
  },
  {
    project_id: 3,
    title: 'Stretch',
    order: 3
  },
]

const tasks = [
  {
    list_id: 1,
    task: 'create fetch for user credentials at login',
    order: 0 
  },
  {
    list_id: 2,
    task: 'create submit button for user login',
    order: 0
  },
  {
    list_id: 3,
    task: 'create login form',
    order: 0
  },
  {
    list_id: 4,
    task: 'burn down the offive',
    order: 0
  },
  {
    list_id: 5,
    task: 'create a time machine',
    order: 0
  },
  {
    list_id: 6,
    task: 'get a watch',
    order: 0
  },
  {
    list_id: 7,
    task: 'miss an appointment',
    order: 0
  },
  {
    list_id: 7,
    task: 'kill steve',
    order: 0
  }
]