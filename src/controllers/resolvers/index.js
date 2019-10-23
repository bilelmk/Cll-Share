import Query from './queries/index'
import Mutation from './mutations/index'
import Types from './types/index'

const resolvers = {
    Query,
    Mutation,
    ...Types
}


export default resolvers