import {authGuard} from '../../sevices/authentification/authentication'
const queries = {
    async meetings (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async meeting (parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    }
}
export default queries