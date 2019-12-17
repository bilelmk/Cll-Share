import model from '../../../src/models/event'
import * as service from '../../../src/controllers/services/event.service'
import {memberOne, memberTwo, memberThree} from './memberMock'
export const eventOne = {
    input:{
        name: 'KEY 2019',
        dateTime : '23 nov 2019',
        details: ['5th edition', 'theme: kill la kill'],
        tasks: undefined
    },
    event: undefined
}  

const initEvent = async (event, tasks) => {
    event.input.tasks = tasks
    event.event = await service.createEvent(event.input)
}

export const initEvents = async ( ) => {
    await model.deleteMany()
    const eventOneTasks =  [{
        member: memberOne.member.id,
        task: 'itayeb ma9rouna'
    },{
        member: memberTwo.member.id,
        task: 'ya3mel animation'
    },{
        member: memberThree.member.id,
        task: 'ya3mel animation'
    }
    ]
    await initEvent(eventOne, eventOneTasks)

}