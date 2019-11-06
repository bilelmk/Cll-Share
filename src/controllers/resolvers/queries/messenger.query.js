import {authGuard} from '../../sevices/authentication'
const queries = {
    async messengers (parent, {memberId ,query, orderBy, pagination}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async messenger (parent, {id, otherInterlocutorId}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async messages (parent, {messengerId, query, orderBy, pagination}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    },
    async message (parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('query not implemented yet')
    }
}
export default queries