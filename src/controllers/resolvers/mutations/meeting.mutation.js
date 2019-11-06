import {authGuard, authneticatedUserShouldBeAdmin} from '../../sevices/authentication'
import * as service from '../../sevices/meeting'
const mutations = {
    async createMeeting(parent, {data}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        service.createMeeting()
    },
    async updateMeeting(parent, {id, data}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        service.updateMeeting()
    },
    async deleteMeeting(parent, {id}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        service.deleteMeeting()
    }
}

export default mutations