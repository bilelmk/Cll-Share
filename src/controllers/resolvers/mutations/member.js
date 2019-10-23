
const mutations = {
    async signIn(parent, {data}, cnxt, info){
        throw new Error ('signIn not implemented yet')
    },
    async signUp(parent, {data}, cnxt, info){
        throw new Error ('signUn not implemented yet')
    },
    async updateMe(parent, {data}, cnxt, info){
        throw new Error ('updateMe not implemented yet')
    },
    async changeMemberRole(parent, {id, role}, cnxt, info){
        throw new Error ('changeMemberRole not implemented yet')
    },
    async deleteMe(parent, {}, cnxt, info){
        throw new Error ('deleteMe not implemented yet')
    },
    async deleteMember(parent, {id}, cnxt, info){
        throw new Error ('deleteMember not implemented yet')
    }
}

export default mutations