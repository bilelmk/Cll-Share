import messengerModel from '../../models/messenger'
import * as memberService from './member.service'
import * as errors from './utils/errors'

const findMessengerByInterlocutorsIds = async (firstInterlocutorId, secondInterlocutorId) => {
    let messenger = await messengerModel.findOne({
        firstInterlocutor: firstInterlocutorId,
        secondInterlocutor: secondInterlocutorId
    })
    if (!messenger) {
        messenger = await messengerModel.findOne({
            secondInterlocutor: firstInterlocutorId,
            firstInterlocutor: secondInterlocutorId
        })
    }
    return !!messenger
}

const tryToSaveMessenger = async (messenger) => {
    try {
        return await messenger.save()
    }catch(error){
        console.error(error)
        throw errors.FAILED_TO_SAVE_MESSENGER
    }
}

export const createMessenger = async (firstInterlocutorId, secondInterlocutorId) => {
    await memberService.getMemberById(firstInterlocutorId)
    await memberService.getMemberById(secondInterlocutorId)
    if(await findMessengerByInterlocutorsIds(firstInterlocutorId,secondInterlocutorId)){
        throw errors.MESSENGER_ALREADY_EXISITS
    }
    const docs = {
        firstInterlocutor: firstInterlocutorId,
        secondInterlocutor: secondInterlocutorId,
        messages: []
    }
    const newMessenger = new messengerModel(docs)
    return await tryToSaveMessenger(newMessenger)
}

export const updateMessenger = (id, data) => {
    throw new Error ('updateMessenger not implemented yet')
}

export const addMessageToMessenger = (id) => {
    throw new Error ('addMessageToMessenger not implemented yet')
}

export const getMessage = (id) => {
    throw new Error ('getMessage query not implemented yet')
}

export const getMessages = (selectorSetting, paginationSetting) => {
    const {query, memberId} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getMessages query not implemented yet')
}

export const getMessenger = async (id, interlocutors) => {
    try {
        if(id) return await messengerModel.findOne({_id:id})
        if(interlocutors){
            const {firstInterlocutor, secondInterlocutor} = interlocutors
            return await findMessengerByInterlocutorsIds(firstInterlocutor, secondInterlocutor)
        } 
    } catch (error) {
        throw errors.UNVALID_SELECTION_OPTIONS
    }
}

export const getMessengers = (selectorSetting, paginationSetting) => {
    const {query, messengerId} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getMessengers query not implemented yet')
}
