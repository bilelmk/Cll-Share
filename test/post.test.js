import 'cross-fetch/polyfill'
import getClientWithoutSubs from './utils/getClientWithoutSubs'
import seedDatabase,{memberOne, memberTwo, memberThree, commentOne, channelOne} from './utils/seedDatabase'
import * as service from '../src/controllers/services/post.service'
import {addPostToChannel} from './utils/operations'
beforeEach(seedDatabase) 

test ( 'should add a post ', async ()=> {
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        content: "post1",
        images: [
            {
                name: "photo1",
                mimetype: "mimetype",
                encoding: "encoding"
            },{
                name: "photo2",
                mimetype: "mimetype",
                encoding: "encoding"
            }
        ],
        files: [
            {
                name: "file1",
                mimetype: "mimetype",
                encoding: "encoding"
            },{
                name: "file2",
                mimetype: "mimetype",
                encoding: "encoding"
            }
        ]
    }
    const variables = {
        data,
        channelId: channelOne.channel.id
    }
    const response = await client.mutate({
        mutation: addPostToChannel,
        variables
    })
    const {post, channel} = response.data.addPostToChannel
    const exists = await service.getPostById(post.id)
    console.log(exists)
    expect(exists.author.toString()).toEqual(memberOne.member.id.toString())
    expect(exists.content).toEqual(data.content)
    expect(exists.images.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.images[0])
    expect(exists.images.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.images[1])
    expect(exists.files.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.files[0])
    expect(exists.files.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.files[1])
    expect(channel.id.toString()).toEqual(channelOne.channel.id.toString())
    expect(channel.posts).toContainEqual(post)


})