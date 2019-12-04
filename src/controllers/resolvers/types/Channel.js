import {getMemberById} from '../../services/member.service'
import {getPostById} from '../../services/post.service'
const Channel = {
    async master(parent, args, cnxt, info){
        return await getMemberById(parent.master)
    },
    async members(parent, args, cnxt, info){
        return parent.members.map((id) => getMemberById(id))
    },
    async posts(parent, args, cnxt, info){
        return parent.posts.map((id) => getPostById(id))
       
    }
}
export default Channel