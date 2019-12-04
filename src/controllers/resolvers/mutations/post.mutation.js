import {authGuard} from '../../services/authentication.service'
import * as channelService from '../../services/channel.service'
import * as service from '../../services/post.service'
const mutations = {
    async addPostToChannel(parent, {channelId, channelName, data}, {request}, info){
        const authenticatedUser = await authGuard(request)
        const channel = await channelService.getChannel(channelId, channelName)
        console.log('\n\n\n [CHannel]: \n', channel)
        channelService.checkMemberMustBelongToChannel(authenticatedUser.id, channel)
        
        data = {
            ... data,
            author: authenticatedUser.id,
        }
        let post = await service.createPost(data, channel)
        console.log('\n\n\n [Post]: \n', post)
        await channelService.addPostToChannel(post, channel)
        return {
            post,
            channel
        }
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