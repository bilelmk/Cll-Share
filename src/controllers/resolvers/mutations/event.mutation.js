import {authGuard, adminAuthGuard} from '../../services/authentication.service'
import * as memberService from '../../services/member.service'
import * as service from '../../services/event.service'
const mutations = {
    async createEvent(parent, {data}, {request}, info){
        await adminAuthGuard(request)
        return await service.createEvent(data)
    },
    async updateEvent(parent, {id, data}, {request}, info){
        await adminAuthGuard(request)
        const event = await service.getEvent(id)
        return await service.updateEvent(event, data)
    },
    async deleteEvent(parent, {id}, {request}, info){
        await adminAuthGuard(request)
        service.deleteEvent(id)
    }
}

export default mutations