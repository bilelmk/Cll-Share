const queries = {
    async me (parent, {}, cnxt, info){
        throw new Error ('query not implemented yet')
    },
    async members (parent, {query, orderBy, pagination}, cnxt, info){
        throw new Error ('query not implemented yet')
    },
    async member (parent, {id}, cnxt, info){
        throw new Error ('query not implemented yet')
    }
}
export default queries