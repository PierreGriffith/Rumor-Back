module.exports = `
  type Type {
    _id: ID
    name: String!
    description: String
    brand_id: String!
  }

  type Query {
    type_name(name: String!, brand: String!): [Type!]!
    type(_id: ID!): [Type!]!
    types(_id: ID!): [Type!]!
  }

  type Mutation {
    createType(Type: CreateTypeInput): Type!
    updateType(_id: ID!, Type: UpdateTypeInput!): Type!
    deleteType(_id: ID!): Type!
  }

  input CreateTypeInput {
    name: String!
    brand_id: String!
  }
  
  input UpdateTypeInput {
    name: String  
    description: String
    brand_id: String
  }`;