module.exports = `
  type Brand {
    _id: ID
    description: String
    name: String!
    image: String
  }

  type Query {
    brand(Brand: GetBrandInput!): [Brand!]!
    brand_by_id(_id: ID): [Brand!]!
    brands: [Brand!]!
  }

  type Mutation {
    createBrand(Brand: CreateBrandInput!): Brand!
    updateBrand(_id: ID, Brand: UpdateBrandInput): Brand!
    deleteBrand(_id: ID!): Brand!
  }

  type Subscription {
    Brand(postId: ID!): BrandSubscriptionPayload!
  }
  

  type BrandSubscriptionPayload {
    mutation: MutationType!
    Brand: Brand!
  }

   input GetBrandInput{
   _id: ID
    name: String
}

  input CreateBrandInput {
    name: String!
  }
  
  input UpdateBrandInput {
    description: String!
    image: String!
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
