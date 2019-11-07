import {authGuard} from '../../services/authentication.service'
import {getWorkshop, getWorkshops} from '../../services/workshop.service'
const queries = {
    async workshops (parent, {query, orderBy, pagination}, cnxt, info){
        authGuard()
        getWorkshops({query}, {orderBy, pagination})
    },
    async workshop (parent, {id}, cnxt, info){
        authGuard()
        getWorkshop(id)
    }
}
export default queries