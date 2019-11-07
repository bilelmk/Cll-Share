import {authGuard} from '../../services/authentication.service'

const mutations = {
    async addPostToChannel(parent, {channelId, channelName, data}, cnxt, info){
        authGuard()
        throw new Error ('addPostToChannel not implemented yet')
    },
    async deletePost(parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('deletePost not implemented yet')
    },
    async commentAPost(parent, {postId, content}, cnxt, info){
        authGuard()
        throw new Error ('commentAPost not implemented yet')
    },
    async deleteCommentary(parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('deleteCommentary not implemented yet')
    }
}

export default mutations