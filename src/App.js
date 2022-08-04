
import { Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import Premium from "./components/Premium/Premium"
import Register from "./components/Register/Register";
import NavigationB from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import NavigationM from "./components/NavMain/NavMain";
import UserProfile from "./components/UserProfile/UserProfile";
import SearchResult from "./components/Search/SearchResult";
import Feed from "./components/Feed/Feed";
import RecoverPassword from "./components/RecoverPass/RecoverPass";
import './App.css';
import './index.css'

function App() {

  return (
    <div className="App">
      
      <Route exact path="/"> 
        <NavigationB/> 
        <Home/> 
        <Footer/>
      </Route>

      <Route exact path="/login"> 
        <NavigationB/> 
        <Login/> 
        <Footer/>
      </Route>

      <Route exact path="/register"> 
        <NavigationB/> 
        <Register/> 
        <Footer/>
      </Route>

      <Route exact path="/premium"> 
        <NavigationB/> 
        <Premium/> 
        <Footer/>
      </Route>

      <Route exact path="/contact"> 
        <NavigationB/> 
        <Contact/> 
        <Footer/>
      </Route>

      <Route exact path="/recover"> 
        <NavigationB/> 
        <RecoverPassword/> 
      </Route>

      <Route exact path="/feed"> 
        <NavigationM/> 
        <Feed/> 
      </Route>

      <Route exact path="/user/:id"> 
        <NavigationM/> 
        <UserProfile/> 
      </Route>

      <Route exact path="/search"> 
        <NavigationM/>
        <SearchResult/>
      </Route>

    </div>

  );
};

export default App;
