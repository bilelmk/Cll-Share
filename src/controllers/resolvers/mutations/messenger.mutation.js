import {authGuard} from '../../sevices/authentication'
import * as service from '../../sevices/messenger'
const mutations = {
    async createMessenger(parent, {otherInterlocutorId}, cnxt, info){
        authGuard()
        service.createMessenger()
    },
    async deleteMessenger(parent, {id, otherInterlocutorId}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        service.deleteMessenger()
    },
    async addMessageToMessenger(parent, {messengerId, otherInterlocutorId, data}, cnxt, info){
        authGuard()
        service.addMessageToMessenger()
    }
}

export default mutations