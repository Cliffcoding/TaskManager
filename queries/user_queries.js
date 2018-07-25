const knex = require('./knex')


module.exports = {
    getAll: () => knex('users').select('*'),
    getOneUser: (username) => knex('users').where('username', username).select('*'),
    getProjects: async (username) => {
        const findUser = knex('users')
            .where('username', username)
            .first()
        const userFound = await findUser
        const findProjectIds = await knex('user_project')
            .where('user_id', userFound.id)
            .select('project_id')
        const projects = await Promise.all(findProjectIds
            .map((project) => (knex('projects')
                .where('id', project.project_id)
                .first()))) //FIX THIS... await promise.all

        return { ...userFound, projects }
    },
    getOneProject: async (id) => {
        const findLists = await knex('lists').where('project_id', id)
        const projectLists = await findLists

        console.log(projectLists);
        return projectLists
    },
}
 