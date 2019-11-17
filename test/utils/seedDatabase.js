import {connect} from 'mongoose'
import memberModel from '../../src/models/member'
import channelModel from '../../src/models/channel'
import {createAuthPlayloadFromMember} from '../../src/controllers/services/utils/authentication.utils'
import * as memberService from '../../src/controllers/services/member.service'
import * as channelService from '../../src/controllers/services/channel.service'

const memberOne = {
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

const memberTwo = {
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

const channelOne = {
    input: {
        name: 'channel1',
        description: 'channel for project X',
        subject: 'project X',
        master: undefined,
        members: undefined
    },
    channel: undefined
}

const channelTwo = {
    input: {
        name: 'channel2',
        description: 'channel for project Z',
        subject: 'project Z',
        master: undefined,
        members: undefined
    },
    channel: undefined
}

const commentOne = {
    input: {
        text: 'Great post. Thanks for sharing!'
    },
    comment: undefined
}

const commentTwo = {
    input: {
        text: 'I am glad you enjoyed it.'
    },
    comment: undefined
}

const initMember =async (member)=>{
    member.member = await memberService.createMember(member.input)
    member.jwt = (await createAuthPlayloadFromMember(member.member)).token
    //console.log('\n\n[Member]:', member.member, '\n\ntoken: ',member.jwt, '\n\n')
}

const initMembers= async() =>{
    await memberModel.deleteMany({})
    await initMember(memberOne)
    await initMember(memberTwo)
}

const initChannel = async(channel, master, members) => {
    channel.input.master = master
    channel.input.members = members ? [...members] : undefined
    channel.channel = await channelService.createChannel(channel.input)
}

const initChannels = async () => {
    await channelModel.deleteMany({})
    //console.log('\n\n[memberID]',memberOne.member.id)
    await initChannel(channelOne, memberOne.member.id, [memberTwo.member.id])
    await initChannel(channelTwo, memberTwo.member.id)
}

const seedDatabase = async () => {
    connect(process.env.MONOGO_DB_ENDPOINT, {
        useNewUrlParser:true,
        useCreateIndex:true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000})
    await initMembers()
    await initChannels()
    // // Delete test data
    // await prisma.mutation.deleteManyComments()
    // await prisma.mutation.deleteManyPosts()
    // await prisma.mutation.deleteManyUsers()

    // // Create user one
    // userOne.user = await prisma.mutation.createUser({
    //     data: userOne.input
    // })
    // userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET)

    // // Create user two
    // userTwo.user = await prisma.mutation.createUser({
    //     data: userTwo.input
    // })
    // userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_SECRET)

    // // Create post one
    // postOne.post = await prisma.mutation.createPost({
    //     data: {
    //         ...postOne.input,
    //         author: {
    //             connect: {
    //                 id: userOne.user.id
    //             }
    //         }
    //     }
    // })

    // // Create post two
    // postTwo.post = await prisma.mutation.createPost({
    //     data: {
    //         ...postTwo.input,
    //         author: {
    //             connect: {
    //                 id: userOne.user.id
    //             }
    //         }
    //     }
    // })

    // // Create comment one
    // commentOne.comment = await prisma.mutation.createComment({
    //     data: {
    //         ...commentOne.input,
    //         author: {
    //             connect: {
    //                 id: userTwo.user.id
    //             }
    //         },
    //         post: {
    //             connect: {
    //                 id: postOne.post.id
    //             }
    //         }
    //     }
    // })

    // // Create comment two
    // commentTwo.comment = await prisma.mutation.createComment({
    //     data: {
    //         ...commentTwo.input,
    //         author: {
    //             connect: {
    //                 id: userOne.user.id
    //             }
    //         },
    //         post: {
    //             connect: {
    //                 id: postOne.post.id
    //             }
    //         }
    //     }
    // })
}

export { seedDatabase as default, memberOne, memberTwo, channelOne,  channelTwo, commentOne, commentTwo }