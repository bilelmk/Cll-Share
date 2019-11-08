import * as authenticationUtils from './utils/authentication.utils'
import * as errors from './utils/errors'
import * as memberService from './member.service'

export const authGuard = async (req) => {
  const token =  authenticationUtils.extractTokenFromRequest(req)
  const tokenData = await authenticationUtils.getDataFromToken(token)
  const authenticatedMember = await memberService.getMemberById(tokenData.id)
  return authenticatedMember
}

export const signIn = async ({email, password}) => {
  if (!email || !password) throw errors.INVALID_EMAIL_OR_PASSWORD_ERROR
  const member = await memberService.getMemberByEmailAndPassword(email, password)
  return authenticationUtils.createAuthPlayloadFromMember(member)
}

export const signUp = async (data) => {
  const member = await memberService.createAMember(data)
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

export const getAthenticatedUser = (requestHeader) => {
    console.log ('about to getAthenticatedUser')
    const user = {
        id: null
    }
    return user
}




