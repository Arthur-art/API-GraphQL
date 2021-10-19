import {
  useQuery,
  gql
} from "@apollo/client";  

export function App() {
  const { loading, error, data } = useQuery(DATA_GRAPHQL);

  if(data){
    console.log(data?.users)
  }

  const users = data?.users;
  
  if(error){
    console.log("Error => ",error)
  }

  return (
    <>
    {loading && <p>Carregando...</p>}
    {users && users.map((value)=>{
      return <li key={value._id}> Name: {value.name} / Email: {value.email}</li>
    })}
    {error && <p>Ops, Ocorreu um erro ao tentar fazer um request na sua api :(</p>}
    </>
  );
}

const DATA_GRAPHQL =  gql`
      query{
  users{
    name
    _id
    email
  }
}
    `;