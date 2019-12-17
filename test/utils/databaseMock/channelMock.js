import channelModel from '../../../src/models/channel'
import postModel from '../../../src/models/post'
import commentModel from '../../../src/models/Commentary'
import * as channelService from '../../../src/controllers/services/channel.service'
import {memberOne, memberTwo} from './memberMock'
import * as postService from '../../../src/controllers/services/post.service'
import * as commentService from '../../../src/controllers/services/comment.service'
export const channelOne = {
    input: {
        name: 'channel1',
        description: 'channel for project X',
        subject: 'project X',
        master: undefined,
        members: undefined
    },
    channel: undefined
}

export const channelTwo = {
    input: {
        name: 'channel2',
        description: 'channel for project Z',
        subject: 'project Z',
        master: undefined,
        members: undefined
    },
    channel: undefined
}

export const postOne = {
    input: {
        content: "post1",
        channel: undefined,
        author: undefined
    },
    post: undefined
}

export const commentOne = {
    input: {
        content: "comm1",
        author: undefined,
        post: undefined
    },
    comment: undefined
}

const initChannel = async(channel, master, members) => {
    channel.input.master = master
    channel.input.members = members ? [...members] : undefined
    channel.channel = await channelService.createChannel(channel.input)
}

const initPost = async (post, channel, author) => {
    post.input.author = author
    post.input.channel = channel.id
    post.post =  await postService.createPost(post.input)
    await channelService.addPostToChannel(post.post, channel)
}

const initComment = async (comment, post, author) => {
    comment.input.author = author
    comment.input.post = post
    comment.comment = await commentService.createComment(comment.input)
    await postService.commentAPost(post, comment.comment)
}

export const initChannels = async () => {
    await channelModel.deleteMany({})
    await postModel.deleteMany()
    await commentModel.deleteMany()
    //console.log('\n\n[memberID]',memberOne.member.id)
    await initChannel(channelOne, memberOne.member.id, [memberTwo.member.id])
    await initChannel(channelTwo, memberTwo.member.id)
    await initPost(postOne, channelOne.channel, memberOne.member.id)
    await initComment(commentOne, postOne.post, memberOne.member.id)
    
    //console.log('\n\n[post.post]: ',postOne.post, '\n\n')
    //console.log('[channel.channel]: ', channelOne.channel)
}
