import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Premium from "./components/Premium/Premium";
import Register from "./components/Register/Register";
import ConfirmarCuenta from "./components/ConfirmarCuenta/ConfirmarCuenta";
import NavigationB from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import NavigationM from "./components/NavMain/NavMain";
import UserProfile from "./components/UserProfile/UserProfile";
import SearchResult from "./components/Search/SearchResult";
import Feed from "./components/Feed/Feed";
import RecoverPassword from "./components/RecoverPass/RecoverPass";
import "./App.css";
import "./index.css";
import PanelUser from "./views/PanelUser/PanelUser";
import NewPassword from "./components/NewPassword/NewPassword";
import Free from "./components/Free/Free";
import Pay from "./components/Pay/Pay";
import ArtistDetail from "./components/ArtistDetail/ArtistDetail";
import AlbumDetail from "./components/AlbumDetail/AlbumDetail";
import PaySuccess from "./components/Pay/PaySuccess";
import PayError from "./components/Pay/PayError";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import ReviewCardFeed from "./components/ReviewCard/ReviewCardFeed";
import Music from "./components/Music/Music";

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

      <Route exact path="/confirmar/:token">
        <NavigationB/>
        <ConfirmarCuenta/>
        <Footer/>
      </Route>

      <Route exact path="/premium">
        <NavigationB/>
        <Premium/>
        <Footer/>
      </Route>

      <Route exact path="/free">
        <NavigationB/>
        <Free/>
        <Footer/>
      </Route>

      <Route exact path="/pay">
        <NavigationB/>
        <Pay/>
        <Footer/>
      </Route>

      <Route exact path="/pay/success">
        <NavigationB/>
        <PaySuccess/>
        <Footer/>
      </Route>

      <Route exact path="/pay/error">
        <NavigationB/>
        <PayError/>
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
        <Footer/>
      </Route>

      <Route exact path="/olvide-password/:token">
        <NavigationB/>
        <NewPassword/>
        <Footer/>
      </Route>

      <Route exact path="/feed">
        <NavigationM/>
        <Feed/>
        <ReviewCard/>
        <Footer/>
      </Route>

      <Route exact path="/music">
        <NavigationM/>
        <Music/>
        <Footer/>
      </Route>

      <Route exact path="/user">
        <NavigationM/>
        <UserProfile/>
        <Footer/>
      </Route>

      <Route exact path="/home">
        <PanelUser/>
      </Route>

      <Route exact path="/search">
        <NavigationM/>
        <SearchResult/>
        <Footer/>
      </Route>

      <Route exact path="/artist/:id">
        <NavigationM/>
        <ArtistDetail/>
        <Footer/>
      </Route>

      <Route exact path="/album/:id">
        <NavigationM/>
        <AlbumDetail/>
      </Route>
    </div>
  );
}

export default App;
