import {ApolloServer} from "apollo-server"
import mongoose from "mongoose"

async function startServer({typeDefs,resolvers}){
   await mongoose.connect("mongodb://localhost:27017/graphql",{
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
    });

    const server = new ApolloServer({typeDefs,resolvers});
    server.listen().then(({url})=>console.log(`Server starte in ${url}`));
}

export default startServer;