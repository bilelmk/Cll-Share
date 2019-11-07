import {authGuard} from '../../services/authentication.service'
import * as service from '../../services/messenger.service'
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