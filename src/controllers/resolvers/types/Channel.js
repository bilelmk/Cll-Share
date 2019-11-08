import {getMemberById} from '../../services/member.service'
const Channel = {
    async master(parent, args, cnxt, info){
        return await getMemberById(parent.master)
    },
    async members(parent, args, cnxt, info){
        return parent.members.map((id) => getMemberById(id))
    },
    posts(parent, args, cnxt, info){

       
    }
}
export default Channel