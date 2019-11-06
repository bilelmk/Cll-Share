import {authGuard} from '../../sevices/authentification/authentication'
const queries = {
    async posts (parent, {channelId, query, orderBy, pagination}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async post (parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    }
}
export default queries