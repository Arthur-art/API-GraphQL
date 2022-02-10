const {ApolloServer, gql} = require('apollo-server');

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


const typeDefs = gql`

    type User {
        _id: ID!
        name: String!
        email: String!
        age: Int!
        active: Boolean!
    }

    type Value{
        value: Int!
    }

    type Post {
        _id: ID!
        title: String
        content: String
        author: User
    }

    type Query{
        hello:String 
        users: [User!]!
        getUserByEmail(email:String!): User!
        sum(a:Int!,b:Int!): Value!
    }

    type Mutation {
        createUser(name: String!, email: String!, age: Int!, email:String!) : [User!]
    }
`;


const resolvers = {
    Query:{
        hello: () => "Hello world",
        users: () => users,
        getUserByEmail: (_, args) =>{
            return users.find((user)=>{
               return user.email === args.email
            });
        },
        sum: (_,args)=>{

            return {
                value: args.a + args.b
            }
        }
    },

    Mutation:{
        createUser: (_, args) => {
            const newUser = {
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                age: args.age,
                active: true
            }
            users.push(newUser);
            return users;
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => console.log(`Server started at ${url}`));