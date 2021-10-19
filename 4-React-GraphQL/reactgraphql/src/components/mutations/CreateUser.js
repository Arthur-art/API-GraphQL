import {
    useQuery,
    gql,
    useMutation
  } from "@apollo/client";  

const CREATE_USER = gql`
  mutation{
  createUser(name:"devReact2",age:25,email:"devreact@gmail.com"){
    name
    email
    _id
  }
}
`;

export const User = ()=>{
    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER);

    return (
        <>
        <button onClick={mutateFunction}>Criar um novo user</button>
        </>
    )
}