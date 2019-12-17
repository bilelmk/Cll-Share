import model from '../../models/event'
import * as errors from './utils/errors'

const tryToSaveEvent = async (event) => {
    try {
        return await event.save()
    } catch ( error) {
        //console.log(error.errors)
        //console.log(error.errors)
        if(error.code == 11000){
            throw errors.UNIQUE_CONSTRAINT_VIOLATION('event', 'name', event.name)
        }
        if(error.name == 'ValidationError') throw errors.VALIDATION_ERROR('event', Object.keys(error.errors), error.errors)
        throw errors.FAILED_TO_SAVE_EVENT
    }
}

export const createEvent = async (data) => {
    const event = new model(data)
    //console.log(event)
    return await tryToSaveEvent(event)
}
export const updateEvent = async (event, {name, dateTime, details, tasksToAdd, tasksIdToRemove}) => {
    if(name) event.name = name
    if(dateTime) event.dateTime = dateTime
    if(details) event.details = details
    if(tasksToAdd) event.tasks.push(...tasksToAdd)
    if(tasksIdToRemove) {
        console.log('[dkhal] tasks: ', tasksIdToRemove)
        console.log('[dkhal1] tasks: ', event.tasks)
        event.tasks = event.tasks.filter((task)=> {
        for( let taskId of tasksIdToRemove){
            if (task.id == taskId) return false
        }
        return true
        })

        console.log('[dkhal2] tasks: ', event.tasks)
    }
    return await tryToSaveEvent(event)
}
export const deleteEvent = (id) => {
    throw new Error ('deleteEvent not implemented yet')
}
export const getEvent = async (id) => {
    if(!id) throw errors.SELECTION_OPTIONS_MISSING('event')
    const filter = {_id: id}
    try {
        const result = await model.findOne(filter)
        if (result) return result
        throw new Error()
    } catch (error) {
        throw errors.UNVALID_SELECTION_OPTIONS('event', filter)
    }
}

export const getEvents = (selectorSetting, paginationSetting) => {
    const {query} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getEvents query not implemented yet')
}