module.exports = `
  type Reference {
    _id: ID
    name: String!
    brand_id: String!
    type_id: String!
    description: String
    end: String
    begin: String
  }

  type Query {
    reference(_id: ID!): Reference!
    references(_id: ID!): [Reference!]!
  }

  type Mutation {
    createReference(Reference: CreateReferenceInput): Reference!
    updateReference(_id: ID!, Reference: UpdateReferenceInput!): Reference!
    deleteReference(_id: ID!): Reference!
  }

  input CreateReferenceInput {
    name: String!
    brand_id: String!
    type_id: String!
  }
  
  input UpdateReferenceInput {
    name: String  
    description: String
    brand_id: String
    type_id: String
    end: String
    begin: String
  }`;