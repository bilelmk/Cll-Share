import { gql } from 'apollo-boost'

export const createEvent = gql`
    mutation ($data: CreateEventInput!) {
        createEvent(
            data: $data
        ){
            id
            name
            dateTime
            details
            tasks{
                id
                member{
                    id
                }
                task
            }
        }
    }
`

export const updateEvent = gql`
    mutation ($data: UpdateEventInput!, $id: String!) {
        updateEvent(
            data: $data
            id: $id
        ){
            id
            name
            dateTime
            details
            tasks{
                id
                member{
                    id
                }
                task
            }
        }
    }
`
