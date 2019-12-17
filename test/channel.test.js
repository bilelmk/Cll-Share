import 'cross-fetch/polyfill'
import getClientWithoutSubs from './utils/getClientWithoutSubs'
import seedDatabase,{memberOne, memberTwo, memberThree} from './utils/seedDatabase'
import * as service from '../src/controllers/services/channel.service' 
import {createChannel, updateChannel} from './utils/operations'
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

test('should raise authError when trying to create a channel without jwt', async ()=>{
    client = getClientWithoutSubs()
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
    try {
        await client.mutate({
            mutation: createChannel,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('UNAUTHENTICATED')
        expect(error.message).toContain('Auth token is not supplied')
    } 
})

test('should raise authError when trying to create a channel without jwt', async ()=> {
    const data = {
        name: "channel3",
        description: "khadhra",
        subject: "11",
    }
    const variables = {
        data,
        name: "channel1"
    }
    try {
        await client.mutate({
            mutation: updateChannel,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('UNAUTHENTICATED')
        expect(error.message).toContain('Auth token is not supplied')
    } 
})

test('should raise authError when trying to create a channel without jwt', async ()=> {
    client = getClientWithoutSubs(memberTwo.jwt)
    const data = {
        name: "channel3",
        description: "khadhra",
        subject: "11",
    }
    const variables = {
        data,
        name: "channel1"
    }
    try {
        await client.mutate({
            mutation: updateChannel,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('FORBIDDEN')
        expect(error.message).toContain('you don\'t have the permition to this action')
    } 
})


test('should update name, description and subject', async ()=> {
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: "channel3",
        description: "descriptionUpdated",
        subject: "SubjectUpdated"
    }
    const variables = {
        data,
        name: "channel1"
    }
    const channelBeforeUpdate = await service.getChannel(null, "channel1") 
    const response = await client.mutate({
        mutation: updateChannel,
        variables
    })
    //console.log('\n\n [response]',response.data.createChannel)
    const exists = await service.getChannel(response.data.updateChannel.id)
    expect(channelBeforeUpdate.id).toEqual(exists.id)
    expect(exists.name).toEqual(data.name)
    expect(exists.description).toEqual(data.description)
    expect(exists.subject).toEqual(data.subject)
    expect(exists.master.toString()).toEqual(memberOne.member.id.toString())
    expect(service.checkMemberBelongsToChannel(memberOne.member.id, exists)).toEqual(true)
    expect(service.checkMemberBelongsToChannel(memberTwo.member.id, exists)).toEqual(true)
})

test('should update ADD Member', async ()=> {
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: "channel3",
        description: "descriptionUpdated",
        subject: "SubjectUpdated",
        memberManipulation: {
            action: "ADD",
            membersIds: [memberThree.member.id]
          }
    }
    const variables = {
        data,
        name: "channel1"
    }
    const channelBeforeUpdate = await service.getChannel(null, "channel1") 
    const response = await client.mutate({
        mutation: updateChannel,
        variables
    })
    //console.log('\n\n [response]',response.data.createChannel)
    const exists = await service.getChannel(response.data.updateChannel.id)
    expect(channelBeforeUpdate.id).toEqual(exists.id)
    expect(exists.name).toEqual(data.name)
    expect(exists.description).toEqual(data.description)
    expect(exists.subject).toEqual(data.subject)
    expect(exists.master.toString()).toEqual(memberOne.member.id.toString())
    expect(service.checkMemberBelongsToChannel(memberOne.member.id, exists)).toEqual(true)
    expect(service.checkMemberBelongsToChannel(memberTwo.member.id, exists)).toEqual(true)
    expect(service.checkMemberBelongsToChannel(memberThree.member.id, exists)).toEqual(true)
})

test('should update REMOVE Member', async ()=> {
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: "channel3",
        description: "descriptionUpdated",
        subject: "SubjectUpdated",
        memberManipulation: {
            action: "REMOVE",
            membersIds: [memberTwo.member.id]
          }
    }
    const variables = {
        data,
        name: "channel1"
    }
    const channelBeforeUpdate = await service.getChannel(null, "channel1") 
    const response = await client.mutate({
        mutation: updateChannel,
        variables
    })
    //console.log('\n\n [response]',response.data.createChannel)
    const exists = await service.getChannel(response.data.updateChannel.id)
    expect(channelBeforeUpdate.id).toEqual(exists.id)
    expect(exists.name).toEqual(data.name)
    expect(exists.description).toEqual(data.description)
    expect(exists.subject).toEqual(data.subject)
    expect(exists.master.toString()).toEqual(memberOne.member.id.toString())
    expect(service.checkMemberBelongsToChannel(memberOne.member.id, exists)).toEqual(true)
    expect(service.checkMemberBelongsToChannel(memberTwo.member.id, exists)).toEqual(false)
})

test('should update channel master when belong to channel', async ()=> {
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: "channel3",
        description: "descriptionUpdated",
        subject: "SubjectUpdated",
        masterId: memberTwo.member.id
    }
    const variables = {
        data,
        name: "channel1"
    }
    const channelBeforeUpdate = await service.getChannel(null, "channel1") 
    const response = await client.mutate({
        mutation: updateChannel,
        variables
    })
    //console.log('\n\n [response]',response.data.createChannel)
    const exists = await service.getChannel(response.data.updateChannel.id)
    expect(channelBeforeUpdate.id).toEqual(exists.id)
    expect(exists.name).toEqual(data.name)
    expect(exists.description).toEqual(data.description)
    expect(exists.subject).toEqual(data.subject)
    expect(exists.master.toString()).toEqual(memberTwo.member.id.toString())
    expect(service.checkMemberBelongsToChannel(memberOne.member.id, exists)).toEqual(true)
    expect(service.checkMemberBelongsToChannel(memberTwo.member.id, exists)).toEqual(true)
})

test('should raise error when update channel master with a member who does not belong to channel', async ()=> {
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: "channel3",
        description: "descriptionUpdated",
        subject: "SubjectUpdated",
        masterId: memberThree.member.id
    }
    const variables = {
        data,
        name: "channel1"
    }
    try {
        await client.mutate({
            mutation: updateChannel,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('FORBIDDEN')
        expect(error.message).toContain('member must belong to channel')
    }  
})