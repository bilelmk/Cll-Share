import memberModel from '../../../src/models/member'
import {createAuthPlayloadFromMember} from '../../../src/controllers/services/utils/authentication.utils'
import * as memberService from '../../../src/controllers/services/member.service'
export const memberOne = {
    input: {
        firstName: "Omar",
        lastName: "Hamza",
        mail: "Omar.Hamza@gmail.com",
        birthDate: "23 may 1997",
        password: "omarpass",
        option: {
        NotifyWorkshops: false,
        NotifyEvents: false,
        NotifyMeetings: true,
        langue: "FRENCH"},
        photo:{
            name: "Omar tof",
            mimetype:"image/jpeg",
            encoding: "code"
        },
        otherInfo:["study IF4","backend"]
    },
    member: undefined,
    jwt: undefined
}

export const memberTwo = {
    input: {
        firstName: "Bilel",
        lastName: "Mekrazi",
        mail: "Bilel.Mk@gmail.com",
        birthDate: "23 jun 1996",
        password: "bilelpass",
        option: {
        NotifyWorkshops: false,
        NotifyEvents: true,
        NotifyMeetings: false,
        langue: "FRENCH"
        },
        photo:{
            name: "bilel tof",
            mimetype:"image/jpeg",
            encoding: "code"
        },
        otherInfo:["study IF5","frontend"]
    },
    member: undefined,
    jwt: undefined
}

export const memberThree = {
    input: {
        firstName: "Jalel",
        lastName: "Fliss",
        mail: "Joe.Fliss@gmail.com",
        birthDate: "23 may 1997",
        password: "jalelpass",
        option: {
        NotifyWorkshops: false,
        NotifyEvents: false,
        NotifyMeetings: true,
        langue: "ENGLISH"},
        photo:{
            name: "jalel tof",
            mimetype:"image/jpeg",
            encoding: "code"
        },
        otherInfo:["study IF4","frontend"]
    },
    member: undefined,
    jwt: undefined
}

const initMember =async (member)=>{
    member.member = await memberService.createMember(member.input)
    member.jwt = (await createAuthPlayloadFromMember(member.member)).token
    //console.log('\n\n[Member]:', member.member, '\n\ntoken: ',member.jwt, '\n\n')
}

export const initMembers= async() =>{
    await memberModel.deleteMany({})
    await initMember(memberOne)
    await memberService.makeMemberAnAdmin(memberOne.member)
    await initMember(memberTwo)
    await initMember(memberThree)
}
