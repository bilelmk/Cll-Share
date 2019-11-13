import {authGuard} from '../../services/authentication.service'
import * as service from '../../services/channel.service'
const mutations = {
    async createChannel(parent, args, cnxt, info){
        const {request} = cnxt
        const authenticatedUser = await authGuard(request)
        const {data} = args
        return await service.createChannel({
            ...data,
            master: authenticatedUser.id,
            members: data.membersIds
        })
    },
    async updateChannel(parent, {id, name, data}, {request}, info ){
        const authenticatedUser = await authGuard(request)
        const channel = await service.getChannel(id, name)
        await service.checkMemberIsChannelMaster(authenticatedUser, channel)
        return await service.updateChannel(channel, data)
    },
    async deleteChannel(parent, {id, names}, cnxt, info){
        authGuard()
        service.deleteChannel(id, names)
    }
}

export default mutations