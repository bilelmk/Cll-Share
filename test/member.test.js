import 'cross-fetch/polyfill'
import {getDataFromToken} from '../src/controllers/services/utils/authentication.utils' 
import getClientWithoutSubs from './utils/getClientWithoutSubs'
import {signUp, signIn, me, updateMe} from './utils/operations'
import seedDatabase,{memberOne} from './utils/seedDatabase'
import {getMemberById, getMemberByEmailAndPassword } from '../src/controllers/services/member.service'
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
        await client.query({
            query: me
            })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('UNAUTHENTICATED')
        expect(error.message).toContain('Auth token is not supplied')
    } 
})

test('test update password and mail', async ()=>{
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        password:"pass",
        mail:'newomarmail@gmail.com' 
    }
    //await createMember(data)
    const variables = {
        data
    }
    const response = await client.mutate({
        mutation: updateMe,
        variables
    })

    expect(memberOne.member.id).toEqual(response.data.updateMe.id)
    const exists = await getMemberById(response.data.updateMe.id)
    expect(!!exists).toBe(true)
    const memberByMailandPass = await getMemberByEmailAndPassword(data.mail, data.password)
    expect(JSON.stringify(exists)).toEqual(JSON.stringify(memberByMailandPass))
})

test('test update values mail', async ()=>{
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        mail:'newomarmail@gmail.com'
    }
    //await createMember(data)
    const variables = {
        data
    }
    const response = await client.mutate({
        mutation: updateMe,
        variables
    })

    expect(memberOne.member.id).toEqual(response.data.updateMe.id)
    const exists = await getMemberById(response.data.updateMe.id)
    expect(!!exists).toBe(true)
    const memberByMailandPass = await getMemberByEmailAndPassword(data.mail, memberOne.input.password)
    expect(JSON.stringify(exists)).toEqual(JSON.stringify(memberByMailandPass))
})

test('should raise error if ujpdate with an existing mail', async ()=>{
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        mail:'bilel.mk@gmail.com'
    }
    //await createMember(data)
    const variables = {
        data
    }


    try {
        await client.mutate({
            mutation: updateMe,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain('bilel.mk@gmail.com')
    }
})

test('test update values password', async ()=>{
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        password:"pass"
    }
    //await createMember(data)
    const variables = {
        data
    }
    const response = await client.mutate({
        mutation: updateMe,
        variables
    })

    expect(memberOne.member.id).toEqual(response.data.updateMe.id)
    const exists = await getMemberById(response.data.updateMe.id)
    expect(!!exists).toBe(true)
    const memberByMailandPass = await getMemberByEmailAndPassword(memberOne.input.mail, data.password)
    expect(JSON.stringify(exists)).toEqual(JSON.stringify(memberByMailandPass))
})


test('test update values', async ()=>{
    client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        firstName: "3mirat",
        lastName: "hamzinou",
        option:{
            NotifyWorkshops: true,
            langue: "ENGLISH"
        },
        photo:{
            name: "mar9a",
            mimetype: "types/mime",
            encoding: "48756"
          }
    }
    //await createMember(data)
    const variables = {
        data
    }
    const response = await client.mutate({
        mutation: updateMe,
        variables
    })

    expect(memberOne.member.id).toEqual(response.data.updateMe.id)
    const exists = await getMemberById(response.data.updateMe.id)
    expect(!!exists).toBe(true)
    expect(exists.photo.name).toEqual("mar9a")
    expect(exists.photo.mimetype).toEqual("types/mime")
    expect(exists.photo.encoding).toEqual("48756")
    expect(exists.firstName).toEqual("3mirat")
    expect(exists.lastName).toEqual("hamzinou")
    expect(exists.option.NotifyWorkshops).toEqual(true)
    expect(exists.option.langue).toEqual("ENGLISH")

})