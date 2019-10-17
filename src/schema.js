import {print} from 'graphql'
import 'graphql-import-node'
import * as channelSchema from './Channel/schema.graphql'
import * as eventSchema from './Event/schema.graphql'
import * as meetingSchema from './Meeting/schema.graphql'
import * as memberSchema from './Member/schema.graphql'
import * as messengerSchema from './Messenger/schema.graphql'
import * as postSchema from './Post/schema.graphql'
import * as sharedSchema from './shared/schema.graphql'
import * as workshopSchema from './Workshop/schema.graphql'

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