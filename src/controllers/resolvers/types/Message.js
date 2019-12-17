import {getMemberById} from '../../services/member.service'
import {getMessenger} from '../../services/messenger.service'
const Message = {
    author: async(parent, data, ctxt, info)=>{
        return await getMemberById(parent.author)
    },
    messenger: async ( parent, data, ctxt, info)=>{
        return await getMessenger(parent.messenger)
    }
}
export default Message