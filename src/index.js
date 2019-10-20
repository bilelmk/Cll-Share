import { GraphQLServer, PubSub } from 'graphql-yoga'

import typeDefs from './schema'




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

server.start({port: 5200}, () => {
    console.log('The Server is Up')
} )


 
