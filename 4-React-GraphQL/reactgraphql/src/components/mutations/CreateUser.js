import {
    useQuery,
    gql,
    useMutation
  } from "@apollo/client";  

const CREATE_USER = gql`
  mutation CreateUser($name: String!,$age: Int!,$email: String!){
    createUser(name:$name,age: $age,email: $email){
    name
    email
    _id
  }
  }
`;

export const User = ()=>{
    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER, {
            variables:{
                name:"Arthur Teixeira",
                age: 25,
                email: "arthurteixeira@gmail.com"
            }
    });

    return (
        <>
        <button onClick={mutateFunction}>Criar um novo user</button>
        </>
    )
}