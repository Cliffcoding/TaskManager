const knex = require('./knex')


module.exports = {
    getAll: () => knex('users')
        .select('*'),
    getOneUser: (username) => knex('users')
        .where('username', username)
        .select('*'),
    getProjects: async (username) => {
        // user q
        const findUser = knex('users')
            .where('username', username)
            .first()
        const user = await findUser
        // project q
        const findProjectIds = await knex('user_project')
            .where('user_id', user.id)
            .select('project_id')
        const findProjectsById = Promise.all(findProjectIds
            .map((project) => (knex('projects')
                .where('id', project.project_id)
                .first()
            )))
        const projects = await findProjectsById
        // send combination
        return { ...user, projects }
    },
    getOneProject: async (id) => {
        const findProject = knex('project')
            .where('id', id)
            .first()
        const project = await findProject
        
        const findLists = await knex.select( 'id', 'title').from('lists')
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
    },
}
 