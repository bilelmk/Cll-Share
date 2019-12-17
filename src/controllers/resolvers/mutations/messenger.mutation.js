import {authGuard} from '../../services/authentication.service'
import * as service from '../../services/messenger.service'
import { memberThree } from '../../../../test/utils/seedDatabase'
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
        const member = await authGuard(request)
        const interlocutors = {
            firstInterlocutor: member.id,
            secondInterlocutor: otherInterlocutorId
        }
        //console.log('[resolver] messengerId: ', messengerId)
        //console.log('[resolver] otherInterlocutorId: ', otherInterlocutorId)
        const messenger = await service.getMessenger(messengerId, interlocutors)

        data = {
            ...data,
            messenger: messenger.id,
            author: member.id
        }
        //console.log('[resolver] messenger: ', messenger)
        const message = await service.createMessage(data)
        //console.log('[resolver] message: ', message)
        await service.addMessageToMessenger(message, messenger)
        //console.log('[resolver] khraj: ')
        return message
    }
}

export default mutations