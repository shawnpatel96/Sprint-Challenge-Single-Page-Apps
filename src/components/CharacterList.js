import React, { useEffect, useState } from "react";
import axios from "axios"
// import {Link} from "react-router-dom";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"
import {Link} from "react-router-dom";
import styled from "styled-components";

const Button= styled.button`
 
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
  `



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
      
      <SearchForm search={search} handleChange={handleChange}/>
      <Link to="/"><Button>Home</Button></Link>
      
      {searchResults.map((items)=>{
        return (
          <div>
          
          
          
            <CharacterCard  key={items.id}
            id={items.id}
            image={items.image}
            name={items.name}
            species={items.species}
            gender={items.gender}
            status={items.status}/>
          
            
            </div>
        
        )
      })}
      {list.map((items)=>{
        return (
          <div>
        
          
          
            <CharacterCard  key={items.id}
            id={items.id}
            image={items.image}
            name={items.name}
            species={items.species}
            gender={items.gender}
            status={items.status}/>
          
            
            </div>
        
        )
      })}
    </section>
  );
}
