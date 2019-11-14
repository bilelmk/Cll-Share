import {authGuard} from '../../services/authentication.service'
import * as service from '../../services/messenger.service'
const mutations = {
    async createMessenger(parent, {otherInterlocutorId}, {request}, info){
        const member = await authGuard(request)
        return await service.createMessenger(member.id, otherInterlocutorId)
    },
    async deleteMessenger(parent, {id, otherInterlocutorId}, {request}, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        service.deleteMessenger()
    },
    async addMessageToMessenger(parent, {messengerId, otherInterlocutorId, data}, {request}, info){
        authGuard()
        service.addMessageToMessenger()
    }
}

export default mutations