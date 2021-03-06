import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import CreateBlog from './Components/CreateBlog/CreateBlog';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/LoginPage/Login/Login';
import PrivateRoute from './Components/LoginPage/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/createBlog">
            <CreateBlog />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
