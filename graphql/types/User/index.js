module.exports = `
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    birthday: String!
    creation: String!
    newsletter: Boolean!
    admin: Boolean!
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(_id: ID!, user: UpdateUserInput!): User!
    deleteUser(_id: ID!): User!
    signup (username: String!, email: String!, password: String!):  User!
    login (email: String!, password: String!):  String
  }

  input CreateUserInput {
   _id: ID
    name: String!
    email: String!
    password: String!
    birthday: String!
    creation: String!
    newsletter: Boolean!
    admin: Boolean!
  }
  
  input UpdateUserInput {
   _id: ID
    name: String
    email: String
    password: String!
    birthday: String
    creation: String
    newsletter: Boolean
    admin: Boolean
  } 
`;
