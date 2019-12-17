import messengerModel from '../../models/messenger'
import messageModel from '../../models/message'
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
    return messenger
}

const tryToSaveMessenger = async (messenger) => {
    try {
        //console.log('trying to save messenger')
        return await messenger.save()
    }catch(error){
        console.error(error)
        throw errors.FAILED_TO_SAVE_MESSENGER
    }
}

export const checkMemberMustBelongToMessenger = (memberId, messenger) => {
    if((messenger.firstInterlocutor != memberId) && (messenger.secondInterlocutor != memberId)){
        throw errors.MEMBER_MUST_BELONGS_TO_MESSENGER
    }
    return true
}

export const createMessenger = async (firstInterlocutorId, secondInterlocutorId) => {
    await memberService.getMemberById(firstInterlocutorId)
    await memberService.getMemberById(secondInterlocutorId)
    if(!!(await findMessengerByInterlocutorsIds(firstInterlocutorId,secondInterlocutorId))){
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

const checkDataOfCreationMessage = async (data) => {
    const messenger = await getMessenger(data.messenger)
    checkMemberMustBelongToMessenger(data.author, messenger)
}

export const createMessage = async (data) => {
    await checkDataOfCreationMessage(data)
    const newMessage = new messageModel(data)
    return await newMessage.save()
} 

export const addMessageToMessenger = async (message, messenger) => {
    //console.log('[add heh to heha]: ', messenger)
    messenger.messages.push(message)
    //console.log('[add heh to heha]: ye7lili')
    const result = await tryToSaveMessenger(messenger)
    //console.log(result)
    return 
}

export const getMessage = async (id) => {
    if(!id) throw errors.SELECTION_OPTIONS_MISSING('message')
    const filter = {_id: id}
    try {
        //console.log( await messageModel.find())
        const result = await messageModel.findOne(filter)
        if (result) return result
        throw new Error()
    } catch (error) {
        //console.log('[Message error]: ',error)
        throw errors.UNVALID_SELECTION_OPTIONS('message', filter)
    }
}

export const getMessages = (selectorSetting, paginationSetting) => {
    const {query, memberId} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getMessages query not implemented yet')
}

export const getMessenger = async (id, interlocutors) => {
    let filter = {}
    //console.log('[getMessenger Interlocutors]: ',interlocutors)
    try {
        let result = null
        //console.log('all messengers: ', await messengerModel.find() )
        if(id) {
            filter = {_id: id} 
            result = await messengerModel.findOne(filter)
        }
        else if(interlocutors){
            //console.log('[getMessenger 1 Interlocutors]: ',interlocutors)
            const {firstInterlocutor, secondInterlocutor} = interlocutors
            result = await findMessengerByInterlocutorsIds(firstInterlocutor, secondInterlocutor)
        } 
        else {
            //console.log('[getMessenger 2 Interlocutors]: ',interlocutors)
            throw errors.SELECTION_OPTIONS_MISSING('Messenger')
        }
        if(!result) throw new Error()
        return result
    } catch (error) {
        //console.log('[error]: ',error)
        throw errors.UNVALID_SELECTION_OPTIONS('Messenger', filter)
    }
}

export const getMessengers = (selectorSetting, paginationSetting) => {
    const {query, messengerId} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getMessengers query not implemented yet')
}
