const Reference = require("../../../models/Reference");

module.exports =  {
    Query: {
        reference: async (parent, { _id }, context, info) => {
            return await Reference.find({ _id });
        },
        references: async (parent,  args, context, info) => {

            const res = await Reference.find({ type_id: args._id } )
                .populate()
                .exec();

            return res.map(u => ({
                _id: u._id.toString(),
                name: u.name,
                brand_id: u.brand_id,
                type_id: u.type_id,
                end: u.end,
                begin: u.begin
            }));
        }
    },
    Mutation: {
        createReference: async (parent, args, context, info) => {

            const newReference = await new Reference({
                name: args.Reference.name,
                brand_id: args.Reference.brand_id,
                type_id: args.Reference.type_id,
            });

            return new Promise((resolve, reject) => {
                newReference.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });

            });
        },

        /*  METTRE ARGS */
        updateReference: async (parent, args, context, info) => {



            return new Promise((resolve, reject) => {
                Reference.findByIdAndUpdate(
                    args._id,
                    { $set: { ...args.Reference } },
                    { new: true }
                ).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });


        },
        deleteReference: async (parent, { _id }, context, info) => {
            return new Promise((resolve, reject) => {
                Reference.findByIdAndDelete(_id).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
};
