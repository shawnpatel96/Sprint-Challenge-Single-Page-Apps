import React from "react";
import styled from "styled-components"

export default function CharacterCard(props) {
  const Card= styled.div`
 
font-family: Georgia, serif;
font-size: 19px;
letter-spacing: 2px;
word-spacing: 2px;
text-align:center;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
border: 5px outset #1C6EA4;
border-radius: 40px 40px 40px 40px;
  `

  const CardImage= styled.img`
  margin-top:5%;
  -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
  `
  return(
    <Card>
      <div className="">
        <CardImage src={props.image}/>
        <div>ID: {props.id}</div>
        <div>Name: {props.name}</div>
        <div>Species:{props.species}</div>
        <div>Gender: {props.gender}</div>
        <div>Alive or Nah: {props.status}</div>
      </div>
    </Card>
  )
}
