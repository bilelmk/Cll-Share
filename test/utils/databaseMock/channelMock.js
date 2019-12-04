import channelModel from '../../../src/models/channel'
import * as channelService from '../../../src/controllers/services/channel.service'
import {memberOne, memberTwo} from './memberMock'
export const channelOne = {
    input: {
        name: 'channel1',
        description: 'channel for project X',
        subject: 'project X',
        master: undefined,
        members: undefined
    },
    channel: undefined
}

export const channelTwo = {
    input: {
        name: 'channel2',
        description: 'channel for project Z',
        subject: 'project Z',
        master: undefined,
        members: undefined
    },
    channel: undefined
}

const initChannel = async(channel, master, members) => {
    channel.input.master = master
    channel.input.members = members ? [...members] : undefined
    channel.channel = await channelService.createChannel(channel.input)
}

export const initChannels = async () => {
    await channelModel.deleteMany({})
    //console.log('\n\n[memberID]',memberOne.member.id)
    await initChannel(channelOne, memberOne.member.id, [memberTwo.member.id])
    await initChannel(channelTwo, memberTwo.member.id)
}
