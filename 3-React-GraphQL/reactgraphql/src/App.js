import {
  useQuery,
  gql,
  useMutation
} from "@apollo/client";
import { CreateUser } from "./components/CreateUser/CreateUser";
import { Users } from "./components/Users/Users";
import "./styles.css";

export function App() {
  const { loading, error, data } = useQuery(DATA_GRAPHQL);

  const users = data?.users;
  
  if(error){
    console.log("Error => ",error)
  }

  return (
    <div className="bodyApp">
    <CreateUser/>
    <Users users={users} loadingProps={loading} errorProps={error}/>
    </div>
  );
}

export const DATA_GRAPHQL =  gql`
      query{
  users{
    name
    _id
    email
    age
  }
}
    `;