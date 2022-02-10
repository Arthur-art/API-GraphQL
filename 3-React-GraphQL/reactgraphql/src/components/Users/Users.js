import react, { useEffect, useState } from "react";
import "./styles.css";
import {
  useQuery,
  gql,
  useMutation
} from "@apollo/client";
import { DATA_GRAPHQL } from "../../App";
import { FiTrash2 } from "react-icons/fi";

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id){
    name
    email
    age
    _id
  }
  }
`;
export const Users = ({users, loadingProps, errorProps}) => {

const [id, setId] = useState("")

const [mutateFunction, { data, loading, error }] = useMutation(DELETE_USER, {
  variables:{
      id: id
  },
  refetchQueries:[{query: DATA_GRAPHQL}]
});

function deleteNewUser(idProps){
  setId(idProps)
  if(id){
    mutateFunction();
  }
}
    
    return (
        <>
        {loadingProps && <p>Carregando...</p>}
        {users && users.map((value)=>{
          return (
              <div className="buttonsUser">
                <button className="createButton">{`Name: ${value.name} / Email: ${value.email} / Idade: ${value.age}`}</button>
                <button className="deleteButton" onClick={() => deleteNewUser(value._id)}><FiTrash2 size={40}/></button>
              </div>
          )
        })}
        {errorProps && <p>Ops, Ocorreu um erro ao tentar fazer um request na sua api :(</p>}
        </>
      );
}