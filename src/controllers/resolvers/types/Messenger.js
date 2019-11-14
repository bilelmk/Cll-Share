import {getMemberById} from '../../services/member.service'
const Messenger = {
    firstInterlocutor: async(parent, data, ctxt, info)=>{
        return await getMemberById(parent.firstInterlocutor)
    },
    secondInterlocutor: async ( parent, data, ctxt, info)=>{
        return await getMemberById(parent.secondInterlocutor)
    }
}
export default Messenger