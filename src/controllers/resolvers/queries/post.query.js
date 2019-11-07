import {authGuard} from '../../services/authentication.service'
import {getPost, getPosts} from '../../services/post.service'
const queries = {
    async posts (parent, {channelId, query, orderBy, pagination}, cnxt, info){
        authGuard()
        getPosts({query, channelId}, {orderBy, pagination})
    },
    async post (parent, {id}, cnxt, info){
        authGuard()
        getPost(id)
    }
}
export default queries