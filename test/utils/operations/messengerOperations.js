import { gql } from 'apollo-boost'
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

export const addMessageToMessenger = gql`
    mutation($data: MessageCreateInput!, $messengerId: String, $otherInterlocutorId: String){
        addMessageToMessenger(
            otherInterlocutorId: $otherInterlocutorId
            data: $data
            messengerId: $messengerId
            )
        {
            id
            author{id }
            content
            images{
                name
                encoding
                mimetype
            }
            files{
                name
                encoding
                mimetype
            }
            messenger{
                id
                messages{
                    id
                    author{id }
                    content
                    images{
                        name
                        encoding
                        mimetype
                    }
                    files{
                        name
                        encoding
                        mimetype
                    }
                }
            }
        } 
    }
`
