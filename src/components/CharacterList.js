import React, { useEffect, useState } from "react";
import axios from "axios"
// import {Link} from "react-router-dom";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"



export default function CharacterList() {

 const [list, setList] = useState([])
 const [search, setSearch] = useState("")
 const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then (response=>{
      console.log(response)
      const data=response.data.results
      console.log(data)
      setList(data)
    })
    .catch(error => {
      console.log("no data", error);
    });
  }, [setList]);
  useEffect(() => {
    setSearchResults(list.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
      )
    )
    },[search])
    const handleChange = e => {
     setSearch(e.target.value);
    };

  return (
    <section className="character-list">
      
      <SearchForm seearch={search} handleChange={handleChange}/>
   
      {searchResults.map((items)=>{
        return (
          
          
            <CharacterCard
            key={items.id}
            id={items.id}
            image={items.image}
            name={items.name}
            species={items.species}
            gender={items.gender}
            status={items.status}
            />
        
        )
      })}
    </section>
  );
}
