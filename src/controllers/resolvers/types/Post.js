import {getMemberById} from '../../services/member.service'
const Post = {
    images (parent, args, cnxt, info){

        
    },
    files (parent, args, cnxt, info){

        
    },
    comments (parent, args, cnxt, info){

        
    },
    async author (parent, args, cnxt, info){
        return await getMemberById(parent.author)
    }
}
export default Post