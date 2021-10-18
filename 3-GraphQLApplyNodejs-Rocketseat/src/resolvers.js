const User = require("./User");

const users = [
    {
        _id: String(Math.random()),
        name: "Arthur",
        email: "arthur.guts@gmail.com",
        age: 25,
        active: true
    },
    {
        _id: String(Math.random()),
        name: "Joohny",
        email: "joohny.guts@gmail.com",
        age: 25,
        active: true
    },
    {
        _id: String(Math.random()),
        name: "Ivar",
        email: "ivar.guts@gmail.com",
        age: 25,
        active: true
    }
]
module.exports = {
    Query:{
        users: () => User.find(),
        user: (_,args)=> User.findById(args.id)
    },

    Mutation:{
        createUser: (_,{name, age, email}) => User.create({name, age, email})
    }
}