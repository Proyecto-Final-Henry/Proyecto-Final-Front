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
import "./index.css";
import NewPassword from "./components/NewPassword/NewPassword";
import Pay from "./components/Pay/Pay";
import ArtistDetail from "./components/ArtistDetail/ArtistDetail";
import AlbumDetail from "./components/AlbumDetail/AlbumDetail";
import PaySuccess from "./components/Pay/PaySuccess";
import PayError from "./components/Pay/PayError";
import Music from "./components/Music/Music";
import Genres from "./components/Genre/Genres";
import GenreDetail from "./components/Genre/GenreDetail";
import SongDetail from "./components/Songs/SongDetail";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Chat from "./components/Chat/Chat";
import Team from "./components/Team/Team";
import PremiumIn from "./components/Premium/PremiumIn";
import ContactIn from "./components/Contact/ContactIn";
import TeamIn from "./components/Team/TeamIn";
import OtherUserProfile from "./components/UserProfile/OtherUserProfile";
import DeactivateAccount from "./components/DeactivateAccount/DeactivateAccount";
import RestoreAccount from "./components/RestoreAccount/RestoreAccount";
import PlaylistComponent from "./components/PlayList/PlaylistComponent"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <NavigationB />
        <Home />
        <Footer />
      </Route>

      <Route exact path="/login">
        <NavigationB />
        <Login />
        <Footer />
      </Route>

      <Route exact path="/register">
        <NavigationB />
        <Register />
        <Footer />
      </Route>

      <Route exact path="/confirmar/:token">
        <ConfirmarCuenta />
      </Route>

      <Route exact path="/premium">
        <NavigationB />
        <Premium />
        <Footer />
      </Route>

      <Route exact path="/premium2">
        <NavigationM />
        <PremiumIn />
        <Footer />
      </Route>

      <Route exact path="/team">
        <NavigationB />
        <Team />
        <Footer />
      </Route>

      <Route exact path="/team2">
        <NavigationM />
        <TeamIn />
        <Footer />
      </Route>

      <Route exact path="/pay">
        <NavigationB />
        <Pay />
        <Footer />
      </Route>

      <Route exact path="/pay/success">
        <PaySuccess />
      </Route>

      <Route exact path="/pay/error">
        <NavigationB />
        <PayError />
        <Footer />
      </Route>

      <Route exact path="/contact">
        <NavigationB />
        <Contact />
        <Footer />
      </Route>

      <Route exact path="/contact2">
        <NavigationM />
        <ContactIn />
        <Footer />
      </Route>

      <Route exact path="/recover">
        <NavigationB />
        <RecoverPassword />
        <Footer />
      </Route>

      <Route exact path="/olvide-password/:token">
        <NavigationB />
        <NewPassword />
        <Footer />
      </Route>

      <Route exact path="/feed">
        <NavigationM />
        <Feed />
        <Footer />
      </Route>

      <Route exact path="/music">
        <NavigationM />
        <Music />
        <Footer />
      </Route>

      <Route exact path="/user">
        <NavigationM />
        <UserProfile />
        <Footer />
      </Route>

      <Route exact path="/admin">
        <NavigationM />
        <AdminPanel />
        <Footer />
      </Route>

      <Route exact path="/genres">
        <NavigationM />
        <Genres />
        <Footer />
      </Route>

      <Route exact path="/genres/:id">
        <NavigationM />
        <GenreDetail />
        <Footer />
      </Route>

      <Route exact path="/search">
        <NavigationM />
        <SearchResult />
        <Footer />
      </Route>

      <Route exact path="/artist/:id">
        <NavigationM />
        <ArtistDetail />
        <Footer />
      </Route>

      <Route exact path="/album/:id">
        <NavigationM />
        <AlbumDetail />
        <Footer />
      </Route>

      <Route exact path="/song/:id">
        <NavigationM />
        <SongDetail />
        <Footer />
      </Route>

      <Route exact path="/users/:id">
        <NavigationM />
        <OtherUserProfile />
        <Footer />
      </Route>

      <Route exact path="/chat">
        <NavigationM />
        <Chat />
        <Footer />
      </Route>

      <Route exact path="/user/deactivate">
        <NavigationM />
        <DeactivateAccount />
        <Footer />
      </Route>

      <Route exact path="/user/restore">
        <NavigationB />
        <RestoreAccount />
        <Footer />
      </Route>

      <Route exact path="/playlist/:id">
        <NavigationM />
        <PlaylistComponent />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
