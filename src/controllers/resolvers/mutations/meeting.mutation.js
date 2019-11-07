import {authGuard, authneticatedUserShouldBeAdmin} from '../../services/authentication.service'
import * as service from '../../services/meeting.service'
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