import { GraphQLServer, PubSub } from 'graphql-yoga'
import belongModel from './models/belong'
import typeDefs from './schema'
import * as mongo from './mongoDB'

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
    let NewModel = belongModel({
        date: "hello",
        member: null,
        channel: null,
    }) 
    NewModel.save().then(resolvers=> console.log(resolvers))

} )


 
