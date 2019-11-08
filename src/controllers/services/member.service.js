import model,{optionModel} from '../../models/member'
import * as hashingUtils from './utils/hashing.utils'
import * as errors from '../services/utils/errors'
export const createMember = async (data) => {
    let newMember = new model(
        {
            ...data,
            password: await hashingUtils.default(data.password),
            option: new optionModel(data.option)
        }
    )
    try {
        const result = await newMember.save()
        return result
    } catch (error) {
        throw error
    }
}

export const updateMember = (id, data) => {
    throw new Error ('updateMember not implemented yet')
}

export const deleteMember = (id) => {
    throw new Error ('deleteMember not implemented yet')
}

export const changeMemberRole = () => {
    throw new Error ('changeMemberRole not implemented yet')
}

export const updateAuthenticatedMember = () => {
    throw new Error ('updateMe not implemented yet')
}

export const deleteAuthenticatedMember = () => {
    throw new Error ('deleteMe not implemented yet')
}

export const getAuthenticatedMember = (header) => {
    throw new Error ('getMe query not implemented yet')
}

export const getMemberById = async (id) => {
    const member = await model.findOne({_id: id})
    if(! member) throw errors.MEMBER_ID_NOT_FOUND
    return member
}

export const getMembers = (selectorSetting, paginationSetting) => {
    const {query} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getMembers query not implemented yet')
}
export const getMemberByEmailAndPassword = async (mail, password) => {
    const member = await model.findOne({mail})
    if ( !member ) throw errors.INVALID_EMAIL_OR_PASSWORD_ERROR
    if ( !await hashingUtils.checkPassword(password, member.password)) throw errors.INVALID_EMAIL_OR_PASSWORD_ERROR
    return member
}