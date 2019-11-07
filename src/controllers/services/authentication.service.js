export const authGuard = (authParamsLikeJWT) => {
    //not implimented yet
    const userIsAuthenticated = false
    console.log("checking user is authenticated")
    return userIsAuthenticated
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

export const signIn = (data) => {
    throw new Error ('signIn not implemented yet')
}

export const signUp = (data) => {
    throw new Error ('signUn not implemented yet')
}

