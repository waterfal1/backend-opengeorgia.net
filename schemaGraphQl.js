import { buildSchema } from 'graphql';

const schemaGraphQl = buildSchema(`
    type Transfer {
        _id: ID
        id: ID
        cost: String
        placeName: String
    }

    type Review {
        _id: ID
        alt: String
        date: String
        face: String
        name: String
        quotes: String
        text1: String
        rating: Int
    }
    
    input ReviewInput {
        _id: String
        alt: String
        date: String
        face: String
        name: String
        quotes: String
        text1: String
        rating: Int
    }

    input ExcursionInput {
        direction: String
        cost: String
        full_text: String
        images: [String]
        name: String
        excursionPlan: [String]
    }

    input TransferInput {
        id: ID
        cost: String
        placeName: String
    }

    input RemoveExcursionInput {
        directionName: String
        excursionName: String
    }

    type Direction {
        _id: ID
        cost: String
        excursions: [Excursion]
        id: ID
        img: String
        main_img: String
        name: String
        text: String
    }

    type Excursion {
        cost: String
        full_text: String
        images: [Image]
        name: String
        plan: [Plan]
        text: String
        directionName: String
    }

    type Image {
        img: String
    }

    type Plan {
        text: String
    }
    
    type User {
        _id: ID!
        email: String!
        password: String
        isActivated: Boolean
        activationLink: String
        role: String
    }
    
    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
        role: String!
        email: String
    }

    input UserInput {
        email: String!
        password: String!
    }
    
    type Message {
        message: String!
    }

    type Query {
        getAllTrans: [Transfer]
        getAllReviews: [Review]
        getAllDirections: [Direction]
        getUserData: [User]
    }
    
    type Mutation {
        createReview(input: ReviewInput): Review
        createExcursion(input: ExcursionInput): Message
        createTransfer(input: TransferInput): Transfer
        removeReview(reviewId: String!): Message
        removeExcursion(directionName: String, excursionName: String): Message
        removeTransfer(transferId: String): Message
        createUser(userInput: UserInput): User
        user(_id: String!): User
        login(email: String!, password: String!): AuthData!
        sendActivationMail(email: String!, activationLink: String): Message!
        activate(activationLink: String): Message
        requestResetPassword(email: String!): Message!
        resetPassword(password: String!, token: String!): Message
    }
`)

export default schemaGraphQl
