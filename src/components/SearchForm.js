import React from "react";



export default function SearchForm(props) {
 

  return (
    <section className="search-form">
      <form>
        <input
        type="text"
        onChange={props.handleChange}
        value={props.value}
        name="name"
        placeholder="search name here"
        />
      </form>
     
  
  
    </section>
  );
}
