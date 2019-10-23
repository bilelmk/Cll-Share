const queries = {
    async events (parent, {query, orderBy, pagination}, cnxt, info){
        throw new Error ('query not implemented yet')
    },
    async event (parent, {id}, cnxt, info){
        throw new Error ('query not implemented yet')
    }
}
export default queries