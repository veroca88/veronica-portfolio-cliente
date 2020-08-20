import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Principal from "./pages/Principal";
import Myprojects from "./pages/Myprojects";

const navLinks = [
  {
    text: "Home",
    path: "/home",
  },
  {
    text: "Experience",
    path: "/experience",
  },
  {
    text: "About",
    path: "/about",
  },
];

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Principal} />
      <Route exact path="/my-projects" component={Myprojects} />
    </div>
  );
}

export default App;
