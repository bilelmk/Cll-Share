import {authGuard} from '../../services/authentication.service'
import {getChannel, getChannels} from '../../services/channel.service'
const queries = {
    async channels (parent, {memberId, query, orderBy, pagination}, cnxt, info){
        authGuard()
        getChannels({memberId, query}, {orderBy, pagination})
    },
    async channel (parent, {name, id}, cnxt, info){
        authGuard()
        getChannel(id, name)
    }
}
export default queries
