
import { Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import Premium from "./components/Premium/Premium"
import Register from "./components/Register/Register";
import NavigationB from "./components/Nav/Nav";
import UserProfile from "./components/UserProfile/UserProfile";
import './App.css';
import './index.css'


function App() {
  return (
    <div className="App">
      
      <Route exact path="/"> 
        <NavigationB/> 
        <Home/> 
      </Route>

      <Route exact path="/login"> 
        <NavigationB/> 
        <Login/> 
      </Route>

      <Route exact path="/register"> 
        <NavigationB/> 
        <Register/> 
      </Route>

      <Route exact path="/premium"> 
        <NavigationB/> 
        <Premium/> 
      </Route>

      <Route exact path="/contact"> 
        <NavigationB/> 
        <Contact/> 
      </Route>
      <Route exact path="/user/:userId"> 
        <NavigationB/> 
        <UserProfile/> 
      </Route>

    </div>

  );
};

export default App;
