const User = require("./User");

module.exports = {
    Query:{
        users: () => User.find(),
    },

    Mutation:{
        createUser: (_,{name, age, email}) => {
            return User.create({name, age, email})
        },
        deleteUser: (_,{id}) => {
           return User.findByIdAndDelete(id)
        },
    }
}