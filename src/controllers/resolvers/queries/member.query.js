import {authGuard} from '../../sevices/authentication'
const queries = {
    async me (parent, {}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async members (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async member (parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    }
}
export default queries