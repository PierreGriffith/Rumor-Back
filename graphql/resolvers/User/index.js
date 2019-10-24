const User = require("../../../models/User");
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
require("dotenv").config({ path: "variables.env"});



module.exports =  {
  Query: {
    user: async (parent, { _id }, context, info) => {
      return await User.findOne({ _id }).exec();
    },
    users: async (parent, args, context, info) => {
      const users = await User.find({})
        .populate()
        .exec();

      return users.map(u => ({
        _id: u._id.toString(),
        name: u.name,
        email: u.email,
        password: u.password,
        birthday: u.birthday,
        creation: u.creation,
        newsletter: u.newsletter,
        admin: u.admin,
      }));
    }
  },
  Mutation: {
    createUser: async (parent, { user }, context, info) => {

      const newUser = await new User({
        name: user.name,
        email: user.email,
        password: user.password, // bcrypt.hash(user.password, 10),
        birthday: user.birthday,
        creation: user.creation,
        newsletter: user.newsletter,
        admin: user.admin
      });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateUser: async (parent, { _id, user }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(_id, { $set: { ...user } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: async (parent, { _id }, context, info) => {

      return new Promise((resolve, reject) => {
        User.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
      signup: async (_, { username, email, password }) => {
          const user = await User.create({
              username,
              email,
              password: await bcrypt.hash(password, 10)
          })
          return jsonwebtoken.sign(
              { id: user.id },
              process.env.JWT_SECRET,
              { expiresIn: '1y' }
          )
      },
      async login ( parent, { email, password }, context, info ) {


          const user = await User.findOne( { email: email } )

      //    console.log(user)
          if (!user) {
              throw new Error('No user with that email')
          }

          /*
          const valid = await bcrypt.compare(password, user.password)


          if (!valid) {
              throw new Error('Incorrect password')
          }
          */

          // return json web token
          return jsonwebtoken.sign(
              { id: user._id },
              process.env.JWT_SECRET,
              { expiresIn: '1d' }
          )
      }
  },
};
