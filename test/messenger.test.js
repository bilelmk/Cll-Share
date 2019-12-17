import 'cross-fetch/polyfill'
import seedDatabase,{memberOne, memberTwo, memberThree, messengerOne} from './utils/seedDatabase'
import * as service from '../src/controllers/services/messenger.service'
import {createMessenger, addMessageToMessenger} from './utils/operations'
import getClientWithoutSubs from './utils/getClientWithoutSubs'

beforeEach(seedDatabase)
let client = getClientWithoutSubs()

test('should create new Messenger', async () => {
    let client = getClientWithoutSubs(memberOne.jwt)
    const variables = {
        otherInterlocutorId: memberThree.member.id
    }
    const response = await client.mutate({
        mutation: createMessenger,
        variables
    })
    const exists = await service.getMessenger(response.data.createMessenger.id)
    //console.log('[response]: ', exists)
    expect(exists.firstInterlocutor.toString()).toEqual(memberOne.member.id.toString())
    expect(exists.secondInterlocutor.toString()).toEqual(memberThree.member.id.toString())
})
test('should raise error while create new Messenger without auth', async () => {
    const variables = {
        otherInterlocutorId: memberThree.member.id
    }
    try {
        await client.mutate({
            mutation: createMessenger,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('UNAUTHENTICATED')
        expect(error.message).toContain('Auth token is not supplied')
    }
})

test('should raise error while create existing messenger ', async () => {
    let client = getClientWithoutSubs(memberOne.jwt)
    const variables = {
        otherInterlocutorId: memberTwo.member.id
    }
    try {
        await client.mutate({
            mutation: createMessenger,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain('messenger already exists')
    }
})

test('should add message to messenger selected by id', async () => {
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        content: "message 1",
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
        messengerId: messengerOne.messenger.id
    }
    const response = await client.mutate({
        mutation: addMessageToMessenger,
        variables
    })
    const message = response.data.addMessageToMessenger
    const {messenger} = message
    delete message['messenger']
    //console.log(post)
    //console.log(channel)
    const exists = await service.getMessage(message.id)
    //console.log(exists)
    expect(exists.author.toString()).toEqual(memberOne.member.id.toString())
    expect(exists.content).toEqual(data.content)
    expect(exists.images.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.images[0])
    expect(exists.images.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.images[1])
    expect(exists.files.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.files[0])
    expect(exists.files.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.files[1])
    expect(messenger.id.toString()).toEqual(messengerOne.messenger.id.toString())
    expect(messenger.messages).toContainEqual(message)
})

test('should add message to messenger selected by other Interlocutors', async () => {
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        content: "message 1",
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
        otherInterlocutorId: memberTwo.member.id
    }
    const response = await client.mutate({
        mutation: addMessageToMessenger,
        variables
    })
    const message = response.data.addMessageToMessenger
    const {messenger} = message
    delete message['messenger']
    //console.log(post)
    //console.log(channel)
    const exists = await service.getMessage(message.id)
    //console.log(exists)
    expect(exists.author.toString()).toEqual(memberOne.member.id.toString())
    expect(exists.content).toEqual(data.content)
    expect(exists.images.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.images[0])
    expect(exists.images.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.images[1])
    expect(exists.files.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.files[0])
    expect(exists.files.map(image=> { return {name: image.name, encoding: image.encoding, mimetype: image.mimetype}})).toContainEqual(data.files[1])
    expect(messenger.id.toString()).toEqual(messengerOne.messenger.id.toString())
    expect(messenger.messages).toContainEqual(message)
})

test('should raise error when adding a message to two members that does not have a messenger', async () => {
    let client = getClientWithoutSubs(memberThree.jwt)
    const data = {
        content: "message 1"
    }
    const variables = {
        data,
        otherInterlocutorId: memberTwo.member.id
    }
    try{await client.mutate({
        mutation: addMessageToMessenger,
        variables
    })}
    catch (error){
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain('selection options are unvalide')
    }
})

test('should raise error when member add a message to messenger which he does not belong to', async () => {
    let client = getClientWithoutSubs(memberThree.jwt)
    const data = {
        content: "message 1"
    }
    const variables = {
        data,
        messengerId: messengerOne.messenger.id
    }
    try{await client.mutate({
        mutation: addMessageToMessenger,
        variables
    })}
    catch (error){
        expect(error.graphQLErrors[0].extensions.code).toBe('FORBIDDEN')
        expect(error.message).toContain('member must belong to messenger')
    }
})