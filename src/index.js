import { GraphQLServer, PubSub } from 'graphql-yoga'

import typeDefs from './schema'

const PORT = 4000

const pubsub = new PubSub();
const resolvers = {
}
const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        pubsub
    }
})

server.start({port: PORT}, () => {
    console.log(`The Server is Up on localhost:${PORT} ` )
} )


 
