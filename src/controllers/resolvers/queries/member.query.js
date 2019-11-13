import {authGuard} from '../../services/authentication.service'
import {getMember, getMembers} from '../../services/member.service'
import * as service from '../../services/member.service'
const queries = {
    async me (parent, {}, {request}, info){
        const authenticatedMember = authGuard(request)
        return await authenticatedMember
    },
    async members (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        return await getMembers({query}, {orderBy, pagination})
        
    },
    async member (parent, {id}, cnxt, info){
        authGuard()
        getMember(id)
        throw new Error ('query not implemented yet')
    }

}
export default queries