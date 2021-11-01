import React from 'react';
import './App.css';
import NavigationBar from "./components/Navbar/NavigationBar";
import Views from "./views/Views";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Views/>
    </BrowserRouter>
  );
}

export default App;
