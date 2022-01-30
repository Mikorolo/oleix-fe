import React from 'react';
import './App.css';
import {useCurrentUser} from "./contexts/UserContext";
import Authorized from "./Authorized";
import Unauthorized from "./Unauthorized";

const App = () => {
  const {isAuthenticated} = useCurrentUser();

  if(isAuthenticated) {
      return (<Authorized/>)
  }
  else {
      return (<Unauthorized/>)
  }
}

export default App;
