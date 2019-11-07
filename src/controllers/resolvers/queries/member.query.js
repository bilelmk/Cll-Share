import {authGuard} from '../../services/authentication.service'
import {getAuthenticatedMember, getMember, getMembers} from '../../services/member.service'
const queries = {
    async me (parent, {}, cnxt, info){
        authGuard()
        getAuthenticatedMember()
        throw new Error ('query not implemented yet')
    },
    async members (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        getMembers({query}, {orderBy, pagination})
        throw new Error ('query not implemented yet')
    },
    async member (parent, {id}, cnxt, info){
        authGuard()
        getMember(id)
        throw new Error ('query not implemented yet')
    }

}
export default queries