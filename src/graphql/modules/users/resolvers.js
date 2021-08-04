import {users} from '../../../db/models/index.js';

export default {    
    Query: {
        users: () => users.findAll(),
        user: (_, { id}) => users.findByPk(id),
    },
    Mutation: {
        createUser: async (_, { data }) => {
            /* Utilizamos db pois a instancia de usuário está completa dentro de db */ 
            return await users.create(data)
        },        
        updateUser: async (_, {data, id }) => {
            const user = await users.findByPk(id)
            if (!user) { throw new Error(`Usuário com id ${id} não encontrado`)}
            return await user.update(data)
        },
        deleteUser: async (_, { data, id}) => {
            const user = await users.findByPk(id);
            if (!user) { throw new Error(`Usuário com id ${id} não encontrado`)}
            return await !!user.destroy(data, id);
        }
    },
};