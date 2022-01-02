import { gql } from "apollo-server-core";

export default gql`
    type User{
        id:String!
        firstName:String!
        lastName:String
        username:String!
        email:String!
        createAt:String!
        updateAt:String!
    }
`;