import {authGuard} from '../../sevices/authentication'
import * as service from '../../sevices/channel'
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