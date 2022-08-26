// import logo from './logo.svg';
import './App.css';
import React from "react"
// import Login from "./components/Login"
import {BrowserRouter,Route,Switch} from "react-router-dom"

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App()  {
  return (
     <BrowserRouter> 
     <div className='App'>
      <Switch>
         <Route exact Path="/" component={Home} />
        <Route Path="/login" component={Login} />
        <Route Path="/register" component={Register} />
        </Switch>
    </div>
    </BrowserRouter>

   
  );
}

export default App;
