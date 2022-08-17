import React from "react";
import { Route } from "react-router-dom";
import AddPost from "./components/AddContact.js";
import EditContact from "./components/EditContact.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/contact" component={() => <Contact />} />
      <Route exact path="/about" component={() => <About />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
