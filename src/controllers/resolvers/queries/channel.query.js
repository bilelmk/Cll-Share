import {authGuard} from '../../services/authentication.service'
import * as service from '../../services/channel.service'
const queries = {
    async channels (parent, {memberId, query, orderBy, pagination}, cnxt, info){
        authGuard()
        service.getChannels({memberId, query}, {orderBy, pagination})
    },
    async channel (parent, {name, id}, {request}, info){
        const member = await authGuard(request)
        const channel = await service.getChannel(id, name)
        service.checkMemberMustBelongToChannel(member.id, channel)
        return channel
    }
}
export default queries
