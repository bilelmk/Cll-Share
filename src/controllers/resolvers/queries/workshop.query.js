import {authGuard} from '../../sevices/authentification/authentication'
const queries = {
    async workshops (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async workshop (parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    }
}
export default queries