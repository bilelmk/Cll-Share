import {getMemberById} from '../../services/member.service'
import {getChannel} from '../../services/channel.service'
import {getCommentById} from '../../services/comment.service'
const Post = {
    images (parent, args, cnxt, info){
        return parent.images
    },
    files (parent, args, cnxt, info){
        return parent.files
        
    },
    comments (parent, args, cnxt, info){
        console.log(parent.comments)
        return parent.comments.map(id => getCommentById(id))
        
    },
    async author (parent, args, cnxt, info){
        return await getMemberById(parent.author)
    },
    async channel (parent, args, cnxt, info){
        console.log(parent)
        const result = await getChannel(parent.channel)
        return result
    }
}
export default Post