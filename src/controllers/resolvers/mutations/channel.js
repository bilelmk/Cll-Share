const mutations = {
    async createChannel(parent, args, cnxt, info){
        const {data} = args  
        throw new Error ('createChannel not implemented yet')
    },
    async updateChannel(parent, {id, name, data}, cnxt, info ){
        throw new Error (' updateChannel not implemented yet')
    },
    async deleteChannel(parent, {id, names}, cnxt, info){
        throw new Error ('deleteChannel not implemented yet')
    }
}

export default mutations