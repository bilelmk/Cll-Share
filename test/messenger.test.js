import 'cross-fetch/polyfill'
import seedDatabase,{memberOne, memberTwo, memberThree} from './utils/seedDatabase'
import * as service from '../src/controllers/services/messenger.service'
import {createMessenger} from './utils/operations'
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