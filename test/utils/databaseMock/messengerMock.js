import * as messengerService from '../../../src/controllers/services/messenger.service'
import {memberOne, memberTwo} from './memberMock'
import messengerModel from '../../../src/models/messenger'
import messageModel from '../../../src/models/message'
export let messengerOne = {
    messenger: undefined
}

export const messageOne = {
    input:{
        content: 'Message one',
        images: [{
            name: 'image1',
            mimetype: 'mimetype',
            encoding: 'encoding'
        }],
        files: [{
            name: 'file1',
            mimetype: 'mimetype',
            encoding: 'encoding'
        }],
        author: undefined,
        messenger: undefined
    },
    message: undefined
}

const initMessage = async (message, authorId, messengerId) => {
    message.input.author = authorId
    message.input.messenger = messengerId
    message.message = await messengerService.createMessage(message.input)
}

export const initMessengers = async () => {
    await messengerModel.deleteMany()
    await messageModel.deleteMany
    messengerOne.messenger = await messengerService.createMessenger(memberOne.member.id, memberTwo.member.id)
    await initMessage(messageOne, memberOne.member.id, messengerOne.messenger.id)
}

