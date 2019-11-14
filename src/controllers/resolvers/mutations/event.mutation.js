import {authGuard, adminAuthGuard} from '../../services/authentication.service'
import * as memberService from '../../services/member.service'
import * as service from '../../services/event.service'
const mutations = {
    async createEvent(parent, {data}, {request}, info){
        console.log(data)
        const member = await adminAuthGuard(request)
        return await service.createEvent(data)
    },
    async updateEvent(parent, {id, data}, {request}, info){
        authGuard() 
        authneticatedUserShouldBeAdmin()
        service.updateEvent(id, data)
    },
    async deleteEvent(parent, {id}, {request}, info){
        authGuard()
        authneticatedUserShouldBeAdmin()
        service.deleteEvent(id)
    }
}

export default mutations