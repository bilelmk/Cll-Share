import model from '../../models/post'
import * as errors from '../services/utils/errors'

export const createPost = async (data) => {
    const newPost = new model(data)
    return await newPost.save()
}
 export const commentAPost = async (post, comment) => {
    //console.log('[postService] post: ',post)
    //console.log('[postService] comment: ',comment._id)
    post.comments.push(comment._id)
    const savedPost = await post.save()
    //console.log('[postService] savedPost: ',savedPost)
    return savedPost
 }

export const updatePost = (id, data) => {
    throw new Error ('updatePost not implemented yet')
}

export const deletePost = (id) => {
    throw new Error ('deletePost not implemented yet')
}

export const getPostById = async (id) => {
    if(!id) throw errors.SELECTION_OPTIONS_MISSING('message')
    const filter = {_id: id}
    try {
        const result = await model.findOne(filter)
        if (result) return result
        throw new Error()
    } catch (error) {
        throw errors.UNVALID_SELECTION_OPTIONS('Post', filter)
    }
}

export const getPosts = (selectorSetting, paginationSetting) => {
    const {query, channelId} = selectorSetting
    const {orderBy, pagination} = paginationSetting
    throw new Error ('getPosts query not implemented yet')
}