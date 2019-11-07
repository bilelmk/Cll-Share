import {authGuard} from '../../services/authentication.service'
import {
    getMessage, getMessages,
    getMessenger, getMessengers
} from '../../services/messenger.service'
const queries = {
    async messengers (parent, {memberId ,query, orderBy, pagination}, cnxt, info){
        authGuard()
        getMessengers({memberId, query}, {orderBy, pagination})
        throw new Error ('query not implemented yet')
    },
    async messenger (parent, {id, otherInterlocutorId}, cnxt, info){
        authGuard()
        getMessenger(id, otherInterlocutorId)
        throw new Error ('query not implemented yet')
    },
    async messages (parent, {messengerId, query, orderBy, pagination}, cnxt, info){
        authGuard()
        getMessages({messengerId, query}, {orderBy, pagination})
        throw new Error ('query not implemented yet')
    },
    async message (parent, {id}, cnxt, info){
        authGuard()
        getMessage(id)
        throw new Error ('query not implemented yet')
    }
}
export default queries