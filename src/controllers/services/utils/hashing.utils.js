import {hash, compare} from 'bcryptjs'
import * as errors from './errors'

const hashPassword = async (password) => {
    return await hash(password, 8)
}

const checkPassword = async (password, hashedPassword) =>{
    if( await compare(password, hashedPassword)){
        return true
    }
    throw errors.INVALID_EMAIL_OR_PASSWORD_ERROR
}

export {hashPassword as default, checkPassword}
