import * as authenticationService from '../../services/authentication.service'
import * as service from '../../services/member.service'
const mutations = {
    async signIn(parent, {data}, cnxt, info){
        return await authenticationService.signIn(data)
    },
    async signUp(parent, {data}, cnxt, info){
        return await authenticationService.signUp(data)
    },
    async updateMe(parent, {data}, {request}, info){
        const member =  await authenticationService.authGuard(request)
        return await service.updateMember(member, data)
    },
    async changeMemberRole(parent, {id, role}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin()
        service.changeMemberRole()
    },
    async deleteMe(parent, {}, cnxt, info){
        authGuard()
        service.deleteAuthenticatedMember()
    },
    async deleteMember(parent, {id}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        service.deleteMember()
    }
}

export default mutations