import { gql } from 'apollo-boost'

export const createChannel = gql`
    mutation($data: CreateChannelInput!) {
        createChannel(
            data: $data
        ){
            id
            name
            description
            subject
            master{
                id
                firstName
                lastName
            }
            members{
                id
                firstName
                lastName
            }
            posts{
                id
            }
        }
    }
`

export const updateChannel = gql`
    mutation($id:String, $name:String,$data: UpdateChannelInput!) {
        updateChannel(
            id: $id
            name: $name
            data: $data
        ){
            id
            name
            description
            subject
            master{
                id
                firstName
                lastName
            }
            members{
                id
                firstName
                lastName
            }
            posts{
                id
            }
        }
    }
`

export const createMessenger = gql`
    mutation($otherInterlocutorId: String!){
        createMessenger(otherInterlocutorId: $otherInterlocutorId)
        {
            id
            firstInterlocutor{id firstName lastName mail password}
            secondInterlocutor{id firstName lastName mail password}
            messages{id}
            createdAt
        } 
    }
`


export const addPostToChannel = gql`
    mutation($data: CreatePostInput!, $channelId: String, $channelName: String) {
        addPostToChannel(
            channelId: $channelId
            channelName: $channelName
            data: $data
        ){
            id
            content
            comments{
                id
            }
            author{
                id
            }
            images{
                name
                mimetype
                encoding
            }
            files{
                name
                mimetype
                encoding
            }
            channel{
                id
                name
                posts{
                    id
                    content
                    comments{
                        id
                    }
                    author{
                        id
                    }
                    images{
                        name
                        mimetype
                        encoding
                    }
                    files{
                        name
                        mimetype
                        encoding
                    }
                }
            }
        }
    }
`

export const commentAPost = gql`
    mutation($content: String!, $postId: String!) {
        commentAPost(
            content: $content
            postId: $postId
        ){
            id
            content
            author{
                id
            }
            post{
                id
                comments{
                    id 
                    content
                    author{
                        id
                    }
                }
            }
            
            
            
        }
    }
`

