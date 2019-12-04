import { gql } from 'apollo-boost'
export const signUp = gql`
    mutation($data:SignUpInput!) {
        signUp(
            data: $data
        ){
            token,
            member {
                id
                firstName
                lastName
                mail
                password
                option{
                    NotifyWorkshops
                    NotifyEvents
                    NotifyMeetings
                    langue
                }
            }
        }
    }
`

export const signIn = gql`
    mutation($data:SignInInput!) {
        signIn(
            data: $data
        ){
            token,
            member {
                id
                firstName
                lastName
                mail
                password
                option{
                    NotifyWorkshops
                    NotifyEvents
                    NotifyMeetings
                    langue
                }
            }
        }
    }
`

export const me = gql`
    query {
        me {
            id
            firstName
            lastName
            mail
            password
            birthDate
        }
    }
`

export const updateMe = gql`
    mutation($data:UpdateMemberInput!) {
        updateMe(
            data: $data
        ){
            id
            firstName
            lastName
            mail
            password
            option{
                NotifyWorkshops
                NotifyEvents
                NotifyMeetings
                langue
            }
            birthDate
            photo{
                id
                mimetype
                encoding
                name
                createdAt
            }
        }
    }
`