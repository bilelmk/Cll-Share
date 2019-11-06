import {authGuard} from '../../sevices/authentication.service'
const queries = {
    async events (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async event (parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    }
}
export default queries