import {getPostById} from '../../services/post.service'
import {getMemberById} from '../../services/member.service'
const Comment = {
    async post(parent, args, cnxt, info){
        return await getPostById(parent.post)
    },
    async author(parent, args, cnxt, info){
        return await getMemberById(parent.author)
    }
}

export default Comment