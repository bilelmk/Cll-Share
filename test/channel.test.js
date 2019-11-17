import 'cross-fetch/polyfill'
import getClientWithoutSubs from './utils/getClientWithoutSubs'
import seedDatabase,{memberOne, memberTwo} from './utils/seedDatabase'
import * as service from '../src/controllers/services/channel.service' 
import {createChannel} from './utils/operations'
let client = getClientWithoutSubs()

beforeEach(seedDatabase)

test ( 'should create channel with the only member is the creator', async ()=> {
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: "channel3",
        description: "khadhra",
        subject: "11"
    }
    const variables = {
        data
    }
    const response = await client.mutate({
        mutation: createChannel,
        variables
    })
    //console.log('\n\n [response]',response.data.createChannel)
    const exists = await service.getChannel(response.data.createChannel.id)
    expect(exists.name).toEqual(data.name)
    expect(exists.description).toEqual(data.description)
    expect(exists.subject).toEqual(data.subject)
    expect(exists.master.toString()).toEqual(memberOne.member.id.toString())
    expect(service.checkMemberBelongsToChannel(memberOne.member.id, exists)).toEqual(true)
})

test ( 'should create channel with the another member', async ()=> {
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: "channel3",
        description: "khadhra",
        subject: "11",
        membersIds: [
            memberTwo.member.id
        ]
    }
    const variables = {
        data
    }
    const response = await client.mutate({
        mutation: createChannel,
        variables
    })
    //console.log('\n\n [response]',response.data.createChannel)
    const exists = await service.getChannel(response.data.createChannel.id)
    expect(exists.name).toEqual(data.name)
    expect(exists.description).toEqual(data.description)
    expect(exists.subject).toEqual(data.subject)
    expect(exists.master.toString()).toEqual(memberOne.member.id.toString())
    expect(service.checkMemberBelongsToChannel(memberOne.member.id, exists)).toEqual(true)
    expect(service.checkMemberBelongsToChannel(memberTwo.member.id, exists)).toEqual(true)
})

test ( 'should raise when creating channel with an existing name', async ()=> {
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: "channel1",
        description: "khadhra",
        subject: "11"
    }
    const variables = {
        data
    }
    try {
        await client.mutate({
            mutation: createChannel,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain(data.name)
    } 
    
})