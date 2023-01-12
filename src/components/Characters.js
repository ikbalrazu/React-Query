import axios from 'axios';
import React from 'react'
import { useQuery } from "react-query";

const Characters = () => {

    // const fetchdata = async() => {
    //     const response = await axios.get("https://api.nationalize.io/?name=nathaniel");
    //     return response.json();
    // }

    // const {data,refetch} = useQuery(['characters'],()=>{
    //     axios
    //     .get("https://api.github.com/users/eunit99/repos")
    //     .then((res) => res.data)
    // });


    const fetchSuperHeros = () => {
        return axios.get("https://api.github.com/users/eunit99/repos");
      };
    
        const { data } = useQuery(
          "super-heroes",
          fetchSuperHeros
        );
      
     

    
  return (

    <>
    <h2>RQSuperHeros Page</h2>
    {data?.data.map((hero) => {
      return <div key={hero.name}>{hero.name}</div>;
    })}
  </>
    // <div>
    //     Characters
    //     <button onClick={()=>console.log(data?.data)}>Get Data</button>
    // </div>
  )
}

export default Characters