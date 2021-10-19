const User = require("./User");

module.exports = {
    Query:{
        users: () => User.find(),
        user: (_,args)=> User.findById(args.id)
    },

    Mutation:{
        createUser: (_,{name, age, email}) => User.create({name, age, email})
    }
}