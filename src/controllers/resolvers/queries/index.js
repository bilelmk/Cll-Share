import channel from './channel'
import event from './event'
import meeting from './meeting'
import member from './member'
import messenger from './messenger'
import post from './post'
import workshop from './workshop'

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
