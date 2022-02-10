import {
    gql,
    useMutation
  } from "@apollo/client";  
import React,{useState} from "react"
import { DATA_GRAPHQL } from "../../App";
import "./styles.css"

const CREATE_USER = gql`
  mutation CreateUser($name: String!,$age: String!,$email: String!){
    createUser(name:$name,age: $age,email: $email){
    name
    email
    age
    _id
  }
  }
`;



export const CreateUser = ()=>{
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER, {
            variables:{
                name:name,
                age: age,
                email: email
            },
            refetchQueries:[{query: DATA_GRAPHQL}]
    });
   

    function createNewUser(){
      if(name && age && email){
        mutateFunction();
      }
      setAge("")
      setEmail("")
      setName("")
    }

    

    return (
        <div className="createUser">
        <input value={name} type="text" placeholder="name" onChange={({target}) => setName(target.value)} />
        <input value={age} type="text" placeholder="age" onChange={({target}) => setAge(target.value)} />
        <input value={email} type="text" placeholder="email" onChange={({target}) => setEmail(target.value)} />
        <button onClick={createNewUser}>Create</button>
        </div>
    )
}