const { mergeTypes } = require("merge-graphql-schemas");

const User = require("./User/");
const Post = require("./Post/");
const Comment = require("./Comment/");
const Brand = require("./Brand/");
const Type = require("./Type/");
const Reference = require("./Reference/");
const Date = require("./Date/");
const Value = require("./Value/");

const typeDefs = [User, Post, Comment, Brand, Type, Reference, Date, Value];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
module.exports = mergeTypes(typeDefs, { all: true });
