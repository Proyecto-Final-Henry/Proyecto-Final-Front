import Songs from "../Songs/Songs"; // la idea es reusar este componente para renderizar las canciones que tiene una playlist

// falta ruta en el back que me traiga las canciones de la api que tiene una playlist en especificx

import { useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "../../css/artistDetail.module.css";
import { BsShieldFillCheck } from "react-icons/bs";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import PlaylistSongs from "./PlaylistSongs";
import CreatePlaylist from "./CreatePlaylist";
import DeletePlaylist from "./DeletePlaylist";

export default function PlaylistComponent() {
  let dispatch = useDispatch();
  let userId = useParams().id;
  const [key, setKey] = useState("top");
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    id: "",
  });

  const index = useSelector((store) => store.index);

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axios(`/api/back-end/users/perfil`, config);
        setUser(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    autenticarUsuario();
  }, []);

  useEffect(() => {
    dispatch(getPlaylist(userId));
  }, []);

  const playlistData = useSelector((state) => state.playList);

  console.log(playlistData);

  return (
    <div className={style.div_box}>
      <div className={style.artistDetail_header}>
        <div>
          <img src={user.userImg} alt={user.name} />
        </div>
        <div className={style.artistDetail_information}>
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
              <PlaylistSongs
                songs={p.songs}
                userId={userId}
                playlistId={p.id}
              />
              <DeletePlaylist id={p.id} userId={userId} />
            </Tab>
          );
        })}
        <Tab eventKey="crear" title="Crear nueva Playlist">
          <CreatePlaylist userId={user.id} />
        </Tab>
      </Tabs>
    </div>
  );
}
