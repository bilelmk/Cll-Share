import {print} from 'graphql'
import 'graphql-import-node'
import * as channelSchema from './GraphQLSchemas/Channel.graphql'
import * as eventSchema from './GraphQLSchemas/Event.graphql'
import * as meetingSchema from './GraphQLSchemas/Meeting.graphql'
import * as memberSchema from './GraphQLSchemas/Member.graphql'
import * as messengerSchema from './GraphQLSchemas/Messenger.graphql'
import * as postSchema from './GraphQLSchemas/Post.graphql'
import * as sharedSchema from './GraphQLSchemas/Shared.graphql'
import * as workshopSchema from './GraphQLSchemas/Workshop.graphql'

const typeDefs = [
    print(channelSchema),
    print(eventSchema),
    print(meetingSchema),
    print(memberSchema),
    print(messengerSchema),
    print(postSchema),
    print(sharedSchema),
    print(workshopSchema)
]

export {typeDefs as default}