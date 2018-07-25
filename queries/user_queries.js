const knex = require('./knex')

// ADD ERROR HANDLING - https://codeburst.io/node-express-async-code-and-error-handling-121b1f0e44ba
// "simplify" queries - https://github.com/tgriesser/knex/issues/882 || https://stackoverflow.com/questions/47503627/create-a-nested-return-model-with-knex-js

module.exports = {
    getAll: () => {
        return knex('users')
            .select('*')
    },
    getOneUser: (username) => {
        return knex('users')
            .where('username', username)
            .select('*')
    },
    getProjects: async (username) => {
        const findUser = knex('users')
            .where('username', username)
            .first()
        const user = await findUser
        
        const findProjectIds = await knex('user_project')
            .where('user_id', user.id)
            .select('project_id')
        const findProjectsById = Promise.all(findProjectIds
            .map((project) => (knex('projects')
                .where('id', project.project_id)
                .first()
            )))

        const projects = await findProjectsById

        return { ...user, projects }
    },
    getOneProject: async (id) => {







        const findProject = knex('project')
            .where('id', id)
            .first()
        const project = await findProject
        
        const findLists = knex.select( 'id', 'title')
            .from('lists')
            .where('project_id', id)
        const lists = await findLists

        await Promise.all(lists
            .map((list, index) => {
                const findTaskByListId = knex('task')
                    .where('list_id', list.id)
                    .first()
                
                const pushTaskToList = findTaskByListId.then((t) => {
                    list['tasks'] = []
                    list.tasks.push(t)
                })

                return pushTaskToList
            }))
        
        project['lists'] = lists

        return project
    }
}
 