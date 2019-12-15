import model from '../../models/Commentary'
import * as errors from '../services/utils/errors'

export const createComment = async (data) => {
    const newComment = new model(data)
    return await newComment.save()
}

export const getCommentById = async (id) => {
    const filter = {_id: id}
    try {
        const result = await model.findOne(filter)
        if (result) return result
        throw new Error()
    } catch (error) {
        throw errors.UNVALID_SELECTION_OPTIONS
    }
}

