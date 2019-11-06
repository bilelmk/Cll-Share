import {authGuard} from '../../sevices/authentification/authentication'
const queries = {
    async channels (parent, {memberId, query, orderBy, pagination}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async channel (parent, {name, id}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    }
}
export default queries
