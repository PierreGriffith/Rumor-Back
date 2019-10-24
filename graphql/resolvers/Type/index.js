const Type = require("../../../models/Type");
const Brand = require("../../../models/Brand");
const Ref = require("../../../models/Reference")

module.exports =  {
    Query: {
        type: async (parent, { _id }, context, info) => {
            return await Type.find({ _id });
        },
        type_name: async (parent, { name, brand }, context, info) => {
            let tmp = await Type.find({ name: name});

            if(tmp[0] === undefined)
               return []

            let tmp_brand = await Brand.find( tmp.brand_id );

          if (tmp_brand[0].name === brand) {
                let refs = await Ref.find({type_id : tmp[0]._id} )
                return refs
          }
            return []
            },
        types: async (parent,  args, context, info) => {

            const res = await Type.find({ brand_id: args._id } )
                .populate()
                .exec();

            return res.map(u => ({
                _id: u._id.toString(),
                name: u.name,
                brand_id: u.brand_id
            }));
        }
    },
    Mutation: {
        createType: async (parent, args, context, info) => {

            const newType = await new Type({
                name: args.Type.name,
                brand_id: args.Type.brand_id,
            });

            return new Promise((resolve, reject) => {
                newType.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });

            });
        },

        /*  METTRE ARGS */
        updateType: async (parent, { _id, type }, context, info) => {
            return new Promise((resolve, reject) => {
                Type.findByIdAndUpdate(
                    _id,
                    { $set: { ...type } },
                    { new: true }
                ).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        deleteType: async (parent, { _id }, context, info) => {
            return new Promise((resolve, reject) => {
                Type.findByIdAndDelete(_id).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
};
