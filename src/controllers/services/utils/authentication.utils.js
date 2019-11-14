
import * as jwt from 'jsonwebtoken'
import * as errors from './errors'

const secret = process.env.JWT_SECRET

export const extractTokenFromRequest = (request) => {
  let token = request.request ? request.request.headers.authorization : request.connection.context.Authorization 
  if (!token) throw errors.TOKEN_IS_MISSING_ERROR
  if (token.startsWith('Bearer ')) token = token.slice(7, token.length)
  return token
}

export const getDataFromToken = async (token) => {
    try {
      const result =  await jwt.verify(token, secret)
      return result
    } catch (error) {
      throw errors.UNVALID_TOKEN_ERROR
    } 
}

export const createAuthPlayloadFromMember= (member) => {
  const token = jwt.sign(createObjectForTokenFromMember(member), secret, {expiresIn: '48h'})
  return {token, member}
}

const createObjectForTokenFromMember = ( member)=>{
  return ({
    id: member.id,
    firstName: member.firstName,
    lastName: member.lastName
  })
}
