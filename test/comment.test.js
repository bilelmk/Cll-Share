import 'cross-fetch/polyfill'
import getClientWithoutSubs from './utils/getClientWithoutSubs'
import seedDatabase,{memberOne, memberTwo, memberThree, commentOne, channelOne, postOne} from './utils/seedDatabase'
import * as service from '../src/controllers/services/comment.service'
import * as postService from '../src/controllers/services/post.service'
import {commentAPost} from './utils/operations'
beforeEach(seedDatabase)

test ( 'should comment a post ', async ()=> {
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        content: "Test Comm",
    }
    const variables = {
        ...data,
        postId: postOne.post.id
    }
    const response = await client.mutate({
        mutation: commentAPost,
        variables
    })
    const comment = response.data.commentAPost
    //console.log(comment)
    const {post} = comment
    delete comment['post']
    //console.log(post)
    const exists = await service.getCommentById(comment.id)
    //console.log(exists)
    expect(exists.author.toString()).toEqual(memberOne.member.id.toString())
    expect(exists.content).toEqual(data.content)
    expect(post.id.toString()).toEqual(postOne.post.id.toString())
    expect(post.comments).toContainEqual(comment)
})

test ( 'should comment a post ', async ()=> {
    let client = getClientWithoutSubs(memberTwo.jwt)
    const data = {
        content: "Test Comm",
    }
    const variables = {
        ...data,
        postId: postOne.post.id
    }
    try {
        await client.mutate({
            mutation: commentAPost,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('FORBIDDEN')
        expect(error.message).toContain('member must belong to channel')
    } 
})