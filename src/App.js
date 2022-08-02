
import { Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import Premium from "./components/Premium/Premium"
import './App.css';


function App() {
  return (

    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/premium" component={Premium}/>
      <Route path="/contact" component={Contact}/>
    </div>

  );
}

export default App;
