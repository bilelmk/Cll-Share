const queries = {
    async channels (parent, {memberId, query, orderBy, pagination}, cnxt, info){
        throw new Error ('query not implemented yet')
    },
    async channel (parent, {name, id}, cnxt, info){
        throw new Error ('query not implemented yet')
    }
}
export default queries