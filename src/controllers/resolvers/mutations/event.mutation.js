import {authGuard, authneticatedUserShouldBeAdmin} from '../../services/authentication.service'
import * as service from '../../services/event.service'
const mutations = {
    async createEvent(parent, {data}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin()
        service.createEvent(data)
    },
    async updateEvent(parent, {id, data}, cnxt, info){
        authGuard() 
        authneticatedUserShouldBeAdmin()
        service.updateEvent(id, data)
    },
    async deleteEvent(parent, {id}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin()
        service.deleteEvent(id)
    }
}

export default mutations