import {authGuard} from '../../services/authentication.service'
import * as service from '../../services/channel.service'
const mutations = {
    async createChannel(parent, args, cnxt, info){
        authGuard()
        const {data} = args
        service.createChannel(data)
    },
    async updateChannel(parent, {id, name, data}, cnxt, info ){
        authGuard()
        service.updateChannel(id, name, data)
    },
    async deleteChannel(parent, {id, names}, cnxt, info){
        authGuard()
        service.deleteChannel(id, names)
    }
}

export default mutations