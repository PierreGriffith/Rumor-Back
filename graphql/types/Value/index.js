module.exports = `
  type Value {
    _id: ID
    date: String!
    link: String!
    brand_id: String!
    type_id: String!
    reference_id: String! 
    user_id: String
    price:  String!
    sell: Boolean!
  }

  type Query {
    value(_id: ID!): Value!
    value_by_ref(ref_name: String!): [Value!]!
    values(_id: ID!): [Value!]!
  }

  type Mutation {
    createValue(Value: CreateValueInput): Value!
    updateValue(_id: ID!, Value: UpdateValueInput!): Value!
    deleteValue(_id: ID!): Value!
    deleteAllValues(_id: ID!): Value!
  }

  input CreateValueInput {
    _id: ID
    date: String!
    link: String!
    brand_id: String!
    reference_id: String!
    type_id: String!
    user_id: String
    price:  String!
    sell: Boolean!
  }
  
  input UpdateValueInput {
    date: String!
    link: String!
    type_id: String!
    brand_id: String!
    reference_id: String!
    user_id: String!
    price:  String!
    sell: Boolean!
  }`;