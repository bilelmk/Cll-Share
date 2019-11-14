import { GraphQLServer, PubSub } from 'graphql-yoga'
import typeDefs from './schema'
import resolvers from './controllers/resolvers/index'
import {} from './mongoDB'

const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context(request) {
        return {
            pubsub,
            request
        }
    }
})
export default server 