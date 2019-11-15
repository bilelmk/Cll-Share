import 'cross-fetch/polyfill'
import {getDataFromToken} from '../src/controllers/services/utils/authentication.utils' 
import getClientWithoutSubs from './utils/getClientWithoutSubs'
import {signUp, signIn, me} from './utils/operations'
import seedDatabase,{memberOne} from './utils/seedDatabase'
import {getMemberById,createMember} from '../src/controllers/services/member.service'
import * as errors from '../src/controllers/services/utils/errors'
let client = getClientWithoutSubs()

beforeEach(seedDatabase)

test('Should create a new user', async () => {
    const data = {
        firstName: "Alla",
        lastName: "Attia",
        mail: "attia.alla@gmail.com",
        birthDate: "23 may 1996",
        password: "mar9a",
        option: {
        NotifyWorkshops: false,
        NotifyEvents: true,
        NotifyMeetings: true,
        langue: "FRENCH"
        }
    }
    //await createMember(data)
    const variables = {
        data
    }
    const response = await client.mutate({
        mutation: signUp,
        variables
    })

    const exists = await getMemberById(response.data.signUp.member.id)
    const tokenData = await getDataFromToken (response.data.signUp.token)
    expect(!!exists).toBe(true)
    expect(tokenData.id).toEqual(exists.id)
})

test('should raise error when trying to signUp with the an existing email',async ()=>
{
    const data = {
        firstName: "Alla",
        lastName: "Attia",
        mail: "Bilel.Mk@gmail.com",
        birthDate: "23 may 1996",
        password: "mar9a",
        option: {
        NotifyWorkshops: false,
        NotifyEvents: true,
        NotifyMeetings: true,
        langue: "FRENCH"
        }
    }
    const variables = {
        data
    }
    try {
        await client.mutate({
            mutation: signUp,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain('bilel.mk@gmail.com')
    }
})

test('should return authload when signin with correct', async ()=>{
    const data = {
        email: "Omar.Hamza@gmail.com",
        password: "omarpass",
    }
    //await createMember(data)
    const variables = {
        data
    }
    const response = await client.mutate({
        mutation: signIn,
        variables
    })
    const exists = await getMemberById(response.data.signIn.member.id)
    const tokenData = await getDataFromToken (response.data.signIn.token)
    expect(!!exists).toBe(true)
    expect(tokenData.id).toEqual(exists.id)
})

test('should raise error when signin with incorrect mail', async ()=>{
    const data = {
        email: "Omarrr.Hamza@gmail.com",
        password: "omarpass",
    }
    //await createMember(data)
    const variables = {
        data
    }
    try{
        await client.mutate({
            mutation: signIn,
            variables
        })
    }catch(error){
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain('Invalid email or password')
        
    }
    
    
})

test('should raise error when signin with incorrect mail', async ()=>{
    const data = {
        email: "Omar.Hamza@gmail.com",
        password: "omarpasss",
    }
    //await createMember(data)
    const variables = {
        data
    }
    try{
        await client.mutate({
            mutation: signIn,
            variables
        })
    }catch(error){
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain('Invalid email or password')
    }
})

test('should return the correct member when there\'s correct bearer token ', async ()=>{
    client = getClientWithoutSubs(memberOne.jwt)
    const response = await client.query({
                            query: me
                            })
    const exists = await getMemberById(response.data.me.id)
    const tokenData = await getDataFromToken (memberOne.jwt)
    expect(!!exists).toBe(true)
    expect(tokenData.id).toEqual(exists.id)
})

test('should raise authError  when there\'s correct bearer token ', async ()=>{
    client = getClientWithoutSubs()
    try {
        const response = await client.query({
            query: me
            })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('UNAUTHENTICATED')
        expect(error.message).toContain('Auth token is not supplied')
    }
    
})
