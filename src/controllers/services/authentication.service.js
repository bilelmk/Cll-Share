import * as authenticationUtils from './utils/authentication.utils'
import * as errors from './utils/errors'
import * as memberService from './member.service'

export const authGuard = async (req) => {
  const tokenData = await extractDataFromRequest(req)
  const authenticatedMember = await memberService.getMemberById(tokenData.id)
  return authenticatedMember
}

export const extractDataFromRequest= async (req) => {
  const token =  authenticationUtils.extractTokenFromRequest(req)
  const tokenData = await authenticationUtils.getDataFromToken(token)
  return tokenData
}

export const signIn = async ({email, password}) => {
  if (!email || !password) throw errors.INVALID_EMAIL_OR_PASSWORD_ERROR
  const member = await memberService.getMemberByEmailAndPassword(email, password)
  return authenticationUtils.createAuthPlayloadFromMember(member)
}

export const signUp = async (data) => {
  const member = await memberService.createMember(data)
  return authenticationUtils.createAuthPlayloadFromMember(member)
}

export const authneticatedUserIsAdmin = (params) => {
    //not implimented yet
    let isAdmin = false
    //return true if admin else false
    return isAdmin
}
export const authneticatedUserShouldBeAdmin = (params) => {
    //not implimented yet
    let isAdmin = true
    if (!isAdmin) throw new Error('Authentication Required')
    return isAdmin
}





