import createError from 'http-errors'
export const INVALID_EMAIL_OR_PASSWORD_ERROR = createError(createError(400, 'Invalid email or password'))
export const TOKEN_IS_MISSING_ERROR = createError(401, 'Auth token is not supplied')
export const UNVALID_TOKEN_ERROR = createError(401, 'Token is unvalid')
export const MEMBER_ID_NOT_FOUND = createError(400, 'Member Id not found')