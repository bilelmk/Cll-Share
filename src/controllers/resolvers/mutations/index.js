import channel from './channel.mutation'
import event from './event.mutation'
import meeting from './meeting.mutation'
import member from './member.mutation'
import messenger from './messenger.mutation'
import post from './post.mutation'
import workshop from './workshop.mutation'

const mutations = {
    ...channel,
    ...event,
    ...meeting,
    ...member,
    ...messenger,
    ...post,
    ...workshop
}

export default mutations