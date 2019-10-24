const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose')
//const typeDefs = require('./schema');
require("dotenv").config({ path: "variables.env"});

const models = require("./config/db/");
const schema = require("./graphql/");


mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(()=> console.log("DB connected"))
    .catch(err => console.error(err));





const server = new ApolloServer({
    schema,
    context: models
});



server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});