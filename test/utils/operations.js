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

const getProfile = gql`
    query {
        me {
            id
            name
            email
        }
    }
`

const getPosts = gql`
    query {
        posts {
            id
            title
            body
            published
        }
    }
`

const myPosts = gql`
    query {
        myPosts {
            id
            title
            body
            published
        }
    }
`

const updatePost = gql`
    mutation($id: ID!, $data: UpdatePostInput!) {
        updatePost(
            id: $id,
            data: $data
        ){
            id
            title
            body
            published
        }
    }
`

const createPost = gql`
    mutation($data: CreatePostInput!) {
        createPost(
            data: $data
        ){
            id
            title
            body
            published
        }
    }
`

const deletePost = gql`
    mutation($id: ID!) {
        deletePost(
            id: $id
        ) {
            id
        }
    }
`

const deleteComment = gql`
    mutation($id: ID!) {
        deleteComment(
            id: $id
        ) {
            id
        }
    }
`

const subscribeToComments = gql`
    subscription($postId: ID!) {
        comment(postId: $postId) {
            mutation
            node {
                id
                text
            }
        }
    }
`

const subscribeToPosts = gql`
    subscription {
        post {
            mutation
        }
    }
`

