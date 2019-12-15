import {authGuard} from '../../services/authentication.service'
import * as channelService from '../../services/channel.service'
import * as service from '../../services/post.service'
import * as commentService from '../../services/comment.service'
const mutations = {
    async addPostToChannel(parent, {channelId, channelName, data}, {request}, info){
        const authenticatedUser = await authGuard(request)
        const channel = await channelService.getChannel(channelId, channelName)
        channelService.checkMemberMustBelongToChannel(authenticatedUser.id, channel)
        data = {
            ... data,
            author: authenticatedUser.id,
            channel: channel.id
        }
        let post = await service.createPost(data, channel)
        //console.log('[post]: ',post)
        await channelService.addPostToChannel(post, channel)
        return post
    },
    async deletePost(parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('deletePost not implemented yet')
    },
    async commentAPost(parent, {postId, content}, {request}, info){
        const authenticatedUser = await authGuard(request)
        const post = await service.getPostById(postId)
        const channel = await channelService.getChannel(post.channel)
        channelService.checkMemberMustBelongToChannel(authenticatedUser.id, channel)
        const data = {
            content,
            author: authenticatedUser.id,
            post: post.id
        }
        //console.log('[post mutation] data: ',data)
        let comment = await commentService.createComment(data, channel)
        //console.log('[post mutation] comment: ',comment)
        await service.commentAPost(post, comment)
        console.log('[post mutation] comment: ',comment)
        console.log('[post mutation] post: ',post)
        return comment
    },
    async deleteCommentary(parent, {id}, cnxt, info){
        authGuard()
        throw new Error ('deleteCommentary not implemented yet')
    }
}

export default mutations