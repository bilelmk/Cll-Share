import model,{optionModel} from '../../models/member'
import * as hashingUtils from './utils/hashing.utils'
import * as errors from '../services/utils/errors'
import * as arrayUtils from '../services/utils/array.utils'
import fileModel from '../../models/file'
const tryToSaveMember = async(member)=>{
    try {
        const result = await member.save()
        return result
    } catch (error) {
        //console.log('[memberService Create]: ',error)
        if(error.code == 11000){
            throw errors.UNIQUE_CONSTRAINT_VIOLATION('Member', 'mail', member.mail)
        }
        throw error
    }
}
export const createMember = async (data) => {
    let docs = {
        ...data,
        password: await hashingUtils.default(data.password),
        option: new optionModel(data.option),
    }
    if (data.photo){
        docs = {
            ...docs,
            photo: new fileModel(data.photo)
        }
    }
    const newMember = new model(docs)
    return await tryToSaveMember(newMember)
    
}


export const updateMember = async (member, data) => {
    let updatedOptions = null
    if(data.option){
        updatedOptions = arrayUtils.updateObject(member.option, data.option)
    }
    if(data.password){
        data.password = await hashingUtils.default(data.password)
    }
    Object.keys(data).forEach((key)=>{
        if (member[key]){
            member[key] = data[key]
        } 
    })
    if(updatedOptions){
        member.option = new optionModel(updatedOptions)
    }
    if(data.photo){
        member.photo = new fileModel(data.photo)
    }
    return await tryToSaveMember(member)

}

export const deleteMember = (id) => {
    throw new Error ('deleteMember not implemented yet')
}

export const makeMemberAnAdmin = async (member) => {
    if(member.role != 'ADMIN'){
      member.role = 'ADMIN'
      return await tryToSaveMember(member)
    }
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
    if(! member) throw errors.MEMBER_ID_NOT_FOUND(id)
    return member
}

export const getMembers = (selectorSetting, paginationSetting) => {
    return model.find()
}
export const getMemberByEmailAndPassword = async (mail, password) => {
    const member = await model.findOne({mail})
    if ( !member ) throw errors.INVALID_EMAIL_OR_PASSWORD_ERROR
    if ( !await hashingUtils.checkPassword(password, member.password)) throw errors.INVALID_EMAIL_OR_PASSWORD_ERROR
    return member
}