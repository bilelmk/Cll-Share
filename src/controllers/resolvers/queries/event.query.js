import {authGuard} from '../../services/authentication.service'
import {getEvent, getEvents} from '../../services/event.service'
const queries = {
    async events (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        getEvents({query}, {pagination, orderBy})
    },
    async event (parent, {id}, cnxt, info){
        authGuard()
        getEvent(id)
    }
}
export default queries