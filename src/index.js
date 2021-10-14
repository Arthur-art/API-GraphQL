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
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => console.log(`Server started at ${url}`));