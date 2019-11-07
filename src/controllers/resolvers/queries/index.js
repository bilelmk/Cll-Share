import channel from './channel.query'
import event from './event.query'
import meeting from './meeting.query'
import member from './member.query'
import messenger from './messenger.query'
import post from './post.query'
import workshop from './workshop.query'

const queries = {
    ...channel,
    ...event,
    ...meeting,
    ...member,
    ...messenger,
    ...post,
    ...workshop
}

export default queries
