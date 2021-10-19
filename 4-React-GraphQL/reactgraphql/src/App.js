import {
  useQuery,
  gql
} from "@apollo/client";

export function App() {
  const { loading, error, data } = useQuery(DATA_GRAPHQL);

  const users = data?.users;
  
  if(users){
    users.map((value)=>{
      console.log(value.name);
    })
  }

  return (
    <>
    {users && users.map((value)=>{
      return <li>{value.name}</li>
    })}
    </>
  );
}

const DATA_GRAPHQL =  gql`
      query{
  users{
    name
  }
}
    `;