import {authGuard, authneticatedUserShouldBeAdmin} from '../../sevices/authentication'
const mutations = {
    async createWorkshop(parent, {}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        throw new Error ('createWorkshop not implemented yet')
    },
    async updateWorkshop(parent, {}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        throw new Error ('updateWorkshop not implemented yet')
    },
    async deleteWorkshop(parent, {}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        throw new Error ('deleteWorkshop not implemented yet')
    }
}

export default mutations