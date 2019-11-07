import { GraphQLServer, PubSub } from 'graphql-yoga'
import typeDefs from './schema'
import resolvers from './controllers/resolvers/index'
import {} from './mongoDB' //don't remove
const PORT = 4000

const pubsub = new PubSub();

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

console.log('ahhi')


 
