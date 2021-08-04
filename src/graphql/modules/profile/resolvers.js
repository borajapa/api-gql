import {profile} from '../../../db/models/index.js';

export default {    
    Query: {
        allProfiles: () => profile.findAll(),
        profile: (_, { id }) => profile.findByPk(id),
    },
    Mutation: {
        createProfile: async (_, { data }) => {
            /* Utilizamos db pois a instancia de usuário está completa dentro de db */ 
            return await profile.create(data)
        },        
        updateProfile: async (_, {data, id }) => {
            const user = await profile.findByPk(id)
            if (!user) { throw new Error(`Usuário com id ${id} não encontrado`)}
            return await user.update(data)
        },
        deleteProfile: async (_, { data, id}) => {
            const user = await profile.findByPk(id);
            if (!user) { throw new Error(`Usuário com id ${id} não encontrado`)}
            return await !!user.destroy(data, id);
        }
    },
};