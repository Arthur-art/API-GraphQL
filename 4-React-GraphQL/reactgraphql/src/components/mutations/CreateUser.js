import {
    useQuery,
    gql,
    useMutation
  } from "@apollo/client";  
import React,{useState} from "react"

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
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")

    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER, {
            variables:{
                name:name,
                age: Number(age),
                email: email
            }
    });

    return (
        <>
        <input value={name} type="text" placeholder="name" onChange={({target}) => setName(target.value)} />
        <input value={age} type="number" placeholder="age" onChange={({target}) => setAge(target.value)} />
        <input value={email} type="text" placeholder="email" onChange={({target}) => setEmail(target.value)} />
        <button onClick={mutateFunction}>Criar um novo user</button>
        </>
    )
}