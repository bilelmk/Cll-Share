import model from '../../models/event'
import * as errors from './utils/errors'

const tryTOSaveEvent = async (event) => {
    try {
        return await event.save()
    } catch (error) {
        console.log(error)
        if(error.code == 11000){
            throw new Error (`name ${event.name} is already used`)
        }
        throw errors.FAILED_TO_SAVE_EVENT
        
    }
}

export const createEvent = async (data) => {
    const event = new model(data)
    return await tryTOSaveEvent(event)
}
export const updateEvent = (id, data) => {
    throw new Error ('updateEvent not implemented yet')
}
export const deleteEvent = (id) => {
    throw new Error ('deleteEvent not implemented yet')
}
export const getEvent = (id) => {
    throw new Error ('getEvent query not implemented yet')
}

export const getEvents = (selectorSetting, paginationSetting) => {
    const {query} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getEvents query not implemented yet')
}