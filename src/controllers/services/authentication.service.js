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

export const memberMustBeAnAdmin = (member) => {
  if(member.role != 'ADMIN') throw errors.AUTHENTICATED_MEMBER_IS_NOT_ADMIN 
  return true
}



export const adminAuthGuard = async (req) => {
  const tokenData = await extractDataFromRequest(req)
  const authenticatedMember = await memberService.getMemberById(tokenData.id)
  memberMustBeAnAdmin(authenticatedMember)
  return authenticatedMember
}





