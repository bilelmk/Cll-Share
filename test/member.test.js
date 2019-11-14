import 'cross-fetch/polyfill'
import {getDataFromToken} from '../src/controllers/services/utils/authentication.utils' 
import getClientWithoutSubs from './utils/getClientWithoutSubs'
import {signUp} from './utils/operations'
import seedDatabase from './utils/seedDatabase'
import {getMemberById,createMember} from '../src/controllers/services/member.service'
import * as errors from '../src/controllers/services/utils/errors'
const client = getClientWithoutSubs()

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
    try {
        await client.mutate({
            mutation: signUp,
            variables
        })
    } catch (error) {
        expect(error.message).toContain('attia.alla@gmail.com')
    }
})