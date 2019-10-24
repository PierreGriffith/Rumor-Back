const Value = require("../../../models/Value");
const Ref = require("../../../models/Reference");

module.exports =  {
  Query: {
    value: async (parent, { _id }, context, info) => {
      return await Value.findOne({ _id }).exec();
    },
      value_by_ref: async (parent, {  ref_name}, context, info) => {


          let id_ref = await Ref.findOne({ name :  ref_name }).exec();


       if ( id_ref === null)
           return []

          const values = await Value.find({reference_id: id_ref._id})
              .populate()
              .exec();
          return values.map(u => ({
              _id: u._id.toString(),
              date: u.date,
              link: u.link,
              // user_id: u.user_id,
              price: u.price,
              reference_id: u.reference_id,
              type_id: u.type_id,
              sell: u.sell
          }));
    },
    values: async (parent, args, context, info) => {
        const values = await Value.find({reference_id: args._id})
        .populate()
        .exec();


        return values.map(u => ({
            _id: u._id.toString(),
            date: u.date,
            link: u.link,
         // user_id: u.user_id,
            price: u.price,
            reference_id: u.reference_id,
            type_id: u.type_id,
            sell: u.sell
      }));
    }
  },
  Mutation: {
    createValue: async (parent, args, context, info) => {

        const newValue = await new Value({
          date: args.Value.date,
          link: args.Value.link,
          brand_id: args.Value.brand_id,
          reference_id: args.Value.reference_id,
        //  user_id: args.Value.user_id,
          type_id: args.Value.type_id,
          price: args.Value.price,
          sell: args.Value.sell
      });

      return new Promise((resolve, reject) => {
        newValue.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateValue: async (parent, { _id, Value }, context, info) => {
      return new Promise((resolve, reject) => {
        Value.findByIdAndUpdate(_id, { $set: { ...Value } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteValue: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Value.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
      deleteAllValues: async (parent, { _id }, context, info) => {

        console.log(_id, "Lay Low")
        console.log(_id, "Lay Low")

          return new Promise((resolve, reject) => {
              Value.deleteMany({ reference_id: _id}).exec((err, res) => {
                  err ? reject(err) : resolve(res);
              });
          });


      }


  },
};
