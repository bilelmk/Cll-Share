import {getMemberById} from '../../services/member.service'
const Event = {
    tasks : async (parent, args, cnxt, info)=>{
        return parent.tasks.map(task => {
            return {
                id: task._id,
                task: task.task,
                createdAt: task.createdAt,
                updatedAt: task.updatedAt,
                member: getMemberById(task.member)
            }
        })
        
    }
}
export default Event