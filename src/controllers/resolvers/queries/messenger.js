const queries = {
    async messengers (parent, {memberId ,query, orderBy, pagination}, cnxt, info){
        throw new Error ('query not implemented yet')
    },
    async messenger (parent, {id, otherInterlocutorId}, cnxt, info){
        throw new Error ('query not implemented yet')
    },
    async messages (parent, {messengerId, query, orderBy, pagination}, cnxt, info){
        throw new Error ('query not implemented yet')
    },
    async message (parent, {id}, cnxt, info){
        throw new Error ('query not implemented yet')
    }
}
export default queries