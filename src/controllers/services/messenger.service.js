export const createMessenger = (data) => {
    throw new Error ('createMessenger not implemented yet')
}
export const updateMessenger = (id, data) => {
    throw new Error ('updateMessenger not implemented yet')
}
export const addMessageToMessenger = (id) => {
    throw new Error ('addMessageToMessenger not implemented yet')
}

export const getMessage = (id) => {
    throw new Error ('getMessage query not implemented yet')
}

export const getMessages = (selectorSetting, paginationSetting) => {
    const {query, memberId} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getMessages query not implemented yet')
}

export const getMessenger = (id, otherInterlocutor) => {
    throw new Error ('getMessenger query not implemented yet')
}

export const getMessengers = (selectorSetting, paginationSetting) => {
    const {query, messengerId} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getMessengers query not implemented yet')
}
