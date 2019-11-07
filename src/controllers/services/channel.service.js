import model from '../../models/channel'
import {getAthenticatedUser} from './authentication.service'

export const createChannel = async (data) => {
    const {name, description, subject, membersIds} = data

    const newChannel = new model({
        name,
        subject,
        description,
        members: membersIds,
        master: getAthenticatedUser().id
    })
    const result = await newChannel.save()
    return result
}
export const updateChannel = (id, name, data) => {
    throw new Error ('updateChannel not implemented yet')
}
export const deleteChannel = (id, names) => {
    throw new Error ('deleteChannel not implemented yet')
}

export const getChannel = (id, name) => {
    throw new Error ('getChannel query not implemented yet')
}

export const getChannels = (selectorSetting, paginationSetting) => {
    const {memberId, query} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getChannels query not implemented yet')
}