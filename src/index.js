import { GraphQLServer, PubSub } from 'graphql-yoga'
import typeDefs from './schema'
import resolvers from './controllers/resolvers/index'
import {json} from 'express'
import {urlencoded} from 'body-parser'
import {} from './mongoDB'
const PORT = 4000

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

server.use(json())
server.use(urlencoded({ // Middleware
    extended: true
  }));

server.start({port: PORT}, () => {
    console.log(`The Server is Up on localhost:${PORT} ` )
} )

console.log('ahhi')


 
