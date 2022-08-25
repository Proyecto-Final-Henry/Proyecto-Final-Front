import Songs from "../Songs/Songs"; // la idea es reusar este componente para renderizar las canciones que tiene una playlist
import { useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "../../css/artistDetail.module.css";
import { BsShieldFillCheck } from "react-icons/bs";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import PlaylistSongs from "../PlayList/PlaylistSongs";
import CreatePlaylist from "../PlayList/CreatePlaylist";
import DeletePlaylist from "../PlayList/DeletePlaylist";
import OtherPlaylistSongs from "../PlayList/OtherPlaylistSongs";

export default function OtherPlaylist(props) {
    const user = useSelector((state) => state.otherUser);
    const history = useHistory();
    const dispatch = useDispatch();
    const [key, setKey] = useState("top");
    const [meUser, setMeUser] = useState({});
    const params = useParams();
    let {id} = params

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      };
    };
    autenticarUsuario();
  }, []);

  useEffect(() => {
    dispatch(getPlaylist(id));
  }, []);

  const playlistData = useSelector((state) => state.playList);

  return (
    <div>
      <div>
        <div>
          {/* <p><BsShieldFillCheck/> Artista Verificado</p> */}
          <h1>Playlists de {user.name}</h1>
          {/* <Button  variant="outline-success">Seguir</Button> */}
        </div>
      </div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {playlistData?.map((p) => {
          return (
            <Tab eventKey={p.name} title={p.name}>
              <OtherPlaylistSongs
                songs={p.songs}
                userId={id}
                playlistId={p.id}
              />
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}