import {connect} from 'mongoose'
import * as messengerService from '../../src/controllers/services/messenger.service'
import {memberOne, memberTwo, memberThree, initMembers} from './databaseMock/memberMock'
import {channelOne, channelTwo, initChannels} from './databaseMock/channelMock'

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

const initMessengers = async () => {
    await messengerService.createMessenger(memberOne.member.id, memberTwo.member.id)
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
    await initMessengers()

}

export { seedDatabase as default, memberOne, memberTwo, memberThree,channelOne,  channelTwo, commentOne, commentTwo }