const mutations = {
    async createMessenger(parent, {otherInterlocutorId}, cnxt, info){
        throw new Error ('createMessenger not implemented yet')
    },
    async deleteMessenger(parent, {id, otherInterlocutorId}, cnxt, info){
        throw new Error ('deleteMessenger not implemented yet')
    },
    async addMessageToMessenger(parent, {messengerId, otherInterlocutorId, data}, cnxt, info){
        throw new Error ('addMessageToMessenger not implemented yet')
    }
}

export default mutations