const { mergeResolvers } = require("merge-graphql-schemas");

const User = require("./User/");
const Post = require("./Post/");
const Comment = require("./Comment/");
const Brand = require("./Brand/");
const Reference = require("./Reference/");
const Type = require("./Type/");
const Date = require("./Date/");
const Value = require("./Value/");

const resolvers = [User, Post, Comment, Brand, Type, Reference,  Date, Value];

module.exports = mergeResolvers(resolvers);
