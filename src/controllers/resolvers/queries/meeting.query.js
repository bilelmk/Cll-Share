import {authGuard} from '../../services/authentication.service'
import {getMeeting, getMeetings} from '../../services/meeting.service'
const queries = {
    async meetings (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        getMeetings({query}, {orderBy, pagination})
        throw new Error ('query not implemented yet')
    },
    async meeting (parent, {id}, cnxt, info){
        authGuard()
        getMeeting(id)
        throw new Error ('query not implemented yet')
    }
}
export default queries