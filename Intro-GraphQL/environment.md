# Configurando o ambiente:

- yarn init -y
- yarn add apollo-server graphql

# Anotações:

- No GraphQL toda request é POST
- Toda request bate no mesmo endpoint (/graphql)
- Para que a api saiba qual recurso ela deve acessar é possivel atravez de Query e Mutation

# Query:

- Sempre que precisar obter uma informação especifica, listar um usuario por exemplo ou um dado de um usuario em especifico,
é utilizado a query, em paralelo com o REST a query pareceria como um GET request

- Ex.:
```js
const typeDefs = gql`
    type Query{
        hello:String
    }
`;

const resolvers = {
    Query:{
        hello: () => "Hello world"
    }
};
```

# Mutation:

- Já a mutation seria mais pra quando for preciso manipular um dado, em paralelo com o REST (POST/PUT/PATCH/DELETE)

# Scalar Types :

- Basicamente são os tipos primitivos como: String, Int, Boolean, Float e ID
