const Brand = require("../../../models/Brand");

module.exports =  {
    Query: {
        brand: async (parent,args, context, info) => {
                return await Brand.find( {name: args.Brand.name} );
        },

        brand_by_id: async (parent,{ _id },  context, info) => {

            console.log(_id)
            return await Brand.find( { _id } );
        },
        brands: async (parent, args, context, info) => {
            const res = await Brand.find({})
                .populate()
                .exec();

            return res.map(u => ({
                _id: u._id.toString(),
                description: u.description,
                name: u.name,
                image: u.image
                /*  IL MANQUE LES TYPES*/
            }));
        }
    },
    Mutation: {
        createBrand: async (parent, args, context, info) => {
            const newBrand = await new Brand({
                name: args.Brand.name,
            });

            return new Promise((resolve, reject) => {
                newBrand.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });

            });
        },

        /*  METTRE ARGS */
        updateBrand: async (parent, args, context, info) => {

            return new Promise((resolve, reject) => {
                Brand.findByIdAndUpdate(
                    args._id,
                    { $set: { ...args.Brand } },
                    { new: true }
                ).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        deleteBrand: async (parent, { _id }, context, info) => {
            return new Promise((resolve, reject) => {
                Brand.findByIdAndDelete(_id).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
};
