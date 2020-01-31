import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import SearchForm from "./components/SearchForm"



export default function App() {


  return (
    <Router>
    <main>

      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path ="/characters" component={CharacterList}/>
      <Route exact path ="/search" component={SearchForm}/>
    </main>
    </Router>
  );
}
