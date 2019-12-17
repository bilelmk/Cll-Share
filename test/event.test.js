import 'cross-fetch/polyfill'
import getClientWithoutSubs from './utils/getClientWithoutSubs'
import {createEvent, updateEvent} from './utils/operations'
import seedDatabase,{memberOne, memberTwo, memberThree, eventOne} from './utils/seedDatabase'
beforeEach(seedDatabase)

test('should create event', async () => {
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: 'KEY 2020',
        dateTime : '23 nov 2020',
        details: ['6th edition', 'theme: kill bill'],
        tasks: [{
            member: memberOne.member.id,
            task: 'itayeb ma9rouna'
        },{
            member: memberTwo.member.id,
            task: 'ya3mel animation'
        },{
            member: memberThree.member.id,
            task: 'ya3mel animation'
        }]
    }
    const variables = {
        data
    }

    const response = await client.mutate({
        mutation: createEvent,
        variables
    })
    const event = response.data.createEvent
    const {tasks} = event
    delete(event[tasks])
    expect(event.name).toEqual(data.name)
    expect(event.details).toEqual(data.details)
    expect(event.dateTime).toEqual((new Date(data.dateTime)).getTime().toString())
    expect(tasks.map((task =>{
        return {
            member: task.member.id,
            task: task.task
        }
    }))).toEqual(data.tasks)
})

test('should raise error when creating event and we are not admin' , async () => {
    let client = getClientWithoutSubs(memberTwo.jwt)
    const data = {
        name: 'KEY 2020',
        dateTime : '23 nov 2020',
        details: ['6th edition', 'theme: kill bill']
    }
    const variables = {
        data
    }

    try {
        await client.mutate({
            mutation: createEvent,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('UNAUTHENTICATED')
        expect(error.message).toContain('authenticated member is not an admin')
    } 
})

test('raise error when trying to save an event with excting name', async () => {
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: 'KEY 2019',
        dateTime : '23 nov 2020',
        details: ['6th edition', 'theme: kill bill']
    }
    const variables = {
        data
    }
    try {
        await client.mutate({
            mutation: createEvent,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain('this name of value KEY 2019 for event is already taken')
    } 
})

test('raise error when trying to create an event with unvalid time date', async () => {
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: 'KEY 2020',
        dateTime : '23/11/2020',
        details: ['6th edition', 'theme: kill bill']
    }
    const variables = {
        data
    }

    try {
        await client.mutate({
            mutation: createEvent,
            variables
        })
    } catch (error) {
        expect(error.graphQLErrors[0].extensions.code).toBe('BAD_USER_INPUT')
        expect(error.message).toContain('validation error on entity event')
        expect(error.message).toContain('Cast to Date failed for value')
    } 
})

test('should update event name with valide name', async ()=>{
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: 'KEY 2021'
    }
    const variables = {
        data,
        id: eventOne.event.id
    }
    const response = await client.mutate({
        mutation: updateEvent,
        variables
    })
    const event = response.data.updateEvent
    const tasksExcpected = []
    tasksExcpected.push({
        member: memberThree.member.id,
        task: 'ya3mel animation'
    })
    event.tasks = event.tasks.map(task =>{
        return {
            member: task.member.id,
            task: task.task
        }
    })
    const newTasks = eventOne.event.tasks.map(task =>{
        console.log('[test] task: ',task)
        return {
            member: task.member,
            task: task.task
        }
    })
    console.log('[Event] update: ', event)
    expect(event.name).toEqual(data.name)
    expect(event.details).toEqual(new Array(...eventOne.event.details))
    expect(event.dateTime).toEqual(eventOne.event.dateTime.getTime().toString())
    expect(event.tasks.toString()).toEqual(new Array(...newTasks).toString())
})


test('should raise error when updating event name with unvalide name', async ()=>{
    
})

test('should update event name with valide timeDate', async()=>{
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        dateTime : '23 sep 2021',
    }
    const variables = {
        data,
        id: eventOne.event.id
    }
    const response = await client.mutate({
        mutation: updateEvent,
        variables
    })
    const event = response.data.updateEvent
    const tasksExcpected = []
    tasksExcpected.push({
        member: memberThree.member.id,
        task: 'ya3mel animation'
    })
    event.tasks = event.tasks.map(task =>{
        return {
            member: task.member.id,
            task: task.task
        }
    })
    const newTasks = eventOne.event.tasks.map(task =>{
        console.log('[test] task: ',task)
        return {
            member: task.member,
            task: task.task
        }
    })
    console.log('[Event] update: ', event)
    expect(event.name).toEqual(eventOne.event.name)
    expect(event.details).toEqual(new Array(...eventOne.event.details))
    expect(event.dateTime).toEqual((new Date(data.dateTime)).getTime().toString())
    expect(event.tasks.toString()).toEqual(new Array(...newTasks).toString())
})


test('should raise error when updating event name with unvalide timeDate', async()=>{

})

test('should update event details', async()=>{
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        details: ['8th edition', 'theme: kill la kill']
    }
    const variables = {
        data,
        id: eventOne.event.id
    }
    const response = await client.mutate({
        mutation: updateEvent,
        variables
    })
    const event = response.data.updateEvent
    const tasksExcpected = []
    tasksExcpected.push({
        member: memberThree.member.id,
        task: 'ya3mel animation'
    })
    event.tasks = event.tasks.map(task =>{
        return {
            member: task.member.id,
            task: task.task
        }
    })
    const newTasks = eventOne.event.tasks.map(task =>{
        console.log('[test] task: ',task)
        return {
            member: task.member,
            task: task.task
        }
    })
    console.log('[Event] update: ', event)
    expect(event.name).toEqual(eventOne.event.name)
    expect(event.details).toEqual(data.details)
    expect(event.dateTime).toEqual(eventOne.event.dateTime.getTime().toString())
    expect(event.tasks.toString()).toEqual(new Array(...newTasks).toString())
})

test('should add event tasks ', async()=>{

})

test('should remove event tasks ', async()=>{

})






test('should test update event with all inputs ', async()=>{
    let client = getClientWithoutSubs(memberOne.jwt)
    const data = {
        name: 'KEY 2021',
        dateTime : '23 sep 2021',
        details: ['8th edition', 'theme: kill la kill'],
        tasksToAdd: [{
            member: memberOne.member.id,
            task: 'itayeb 3eja'
        },{
            member: memberTwo.member.id,
            task: 'itayeb couscsi'
        }],
        tasksIdToRemove: [
            eventOne.event.tasks[0].id,
            eventOne.event.tasks[1].id,
        ]
    }
    const variables = {
        data,
        id: eventOne.event.id
    }
    const response = await client.mutate({
        mutation: updateEvent,
        variables
    })
    const event = response.data.updateEvent
    const tasksExcpected = []
    tasksExcpected.push({
        member: memberThree.member.id,
        task: 'ya3mel animation'
    })
    tasksExcpected.push(...data.tasksToAdd) 
    console.log('[Event] update: ', event)
    const {tasks} = event
    delete(event[tasks])
    expect(event.name).toEqual(data.name)
    expect(event.details).toEqual(data.details)
    expect(event.dateTime).toEqual((new Date(data.dateTime)).getTime().toString())
    expect(tasks.map((task =>{
        return {
            member: task.member.id,
            task: task.task
        }
    }))).toEqual(tasksExcpected)
})


