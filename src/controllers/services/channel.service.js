import model from '../../models/channel'
import {removeDuplicates} from './utils/array.utils'
import * as errors from './utils/errors'

const tryToSaveChannel = async (channel) => {
    makeMasterBelongsToChannelMembers(channel)
    channel.members = removeDuplicates(channel.members)
    try {
        return await channel.save()
    } catch (error) {
        if (error.code === 11000) throw new Error (`name ${ channel.name } already used`)
    }
}

const makeMasterBelongsToChannelMembers = (channel) => {
    if(!channel.members){
        channel.members = [channel.master]
    }
    channel.members = checkMemberBelongsToChannel(channel.master, channel)
                        ? channel.members : 
                        channel.members.push(channel.master)
}

export const createChannel = async (data) => {
    const newChannel = new model(data)
    return await tryToSaveChannel(newChannel)
}


export const checkMemberIsChannelMaster = (member, channel) => {
    if (member.id == channel.master) return true
    throw errors.ACCESS_DENIED
}

export const checkMemberBelongsToChannel = (memberId, channel) => {
    const memberIds = channel.members.map((id)=> id.toString())
    if (!memberIds.includes(memberId.toString())) return false
    return true
} 

export const checkMemberMustBelongToChannel = (memberId, channel)=>{
    const result = checkMemberBelongsToChannel(memberId, channel)
    if(!result) throw errors.MEMBER_MUST_BELONGS_TO_CHANNEL
    return result
}

const manipulateMembers = (members, memberManipulation)=> {
    const {action, membersIds} =memberManipulation
    members = members.map(id => id.toString())
    const membersToManipulateIds = membersIds
    if (action == "ADD") {
        members.push(...membersToManipulateIds)
    }else if (action == "REMOVE"){
        members = members.filter((id)=> {
            return !membersToManipulateIds.includes(id.toString())
        })
    }
    return members
}

export const updateChannel = async (channel, updateData) => {
    if (updateData.memberManipulation){
        channel.members = manipulateMembers(channel.members, updateData.memberManipulation)
    }
    if (updateData.masterId ){
        checkMemberMustBelongToChannel(updateData.masterId, channel)
        channel.master = updateData.masterId
    }
    Object.keys(updateData).forEach((key)=>{
        if (channel[key]){
            channel[key] = updateData[key]
        } 
    })
    return await tryToSaveChannel(channel)

}

export const deleteChannel = (id, names) => {
    throw new Error ('deleteChannel not implemented yet')
}

export const getChannel = async (id, name) => {
    let filter = {}
    if (id){
        filter = {
            _id: id
        }
    }else if (name){
        filter = {
            name
        }
    }else {
        throw errors.SELECTION_OPTIONS_MISSING
    }
    try {
        const result = await model.findOne(filter)
        if (result) return result
        throw new Error()
    } catch (error) {
        throw errors.UNVALID_SELECTION_OPTIONS
    }
    
}

export const getChannels = (selectorSetting, paginationSetting) => {
    const {memberId, query} = selectorSetting
    const {orderBy, pagination} = paginationSetting

}