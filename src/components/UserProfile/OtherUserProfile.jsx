//import {useSelector} from 'react-redux'; // descomentar cuando este llegando la data
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import "../../css/users.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOtherUser } from "../../redux/actions/index";
import Follow from "../Follow/Follow";

export default function OtherUserProfile() {
  //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params
  const user = useSelector((state) => state.otherUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const [meUser, setMeUser] = useState({});
  console.log(meUser)
  const { id } = useParams();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }
      const active = localStorage.getItem("active");
      if (active === "false") {
        history.push("/user/restore");
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
        setMeUser(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    autenticarUsuario();
    dispatch(getOtherUser(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="detailBac">
        <div className="detail">
          <div className="carta">
            <div>
              <img src={user?.userImg} alt="userImg"></img>
              <br />
              <br />
            </div>
            <h3 className="userP">{user?.name}</h3>
            <p className="userP">{user?.email}</p>
            <p className="userP">Miembro desde {user?.createdDate}</p>
            <p className="userP">Usuario {user?.role}</p>
            <p>Seguidores: {user?.followers?.length}</p>
            <p>Seguidos: {user?.following?.length}</p>
            {meUser.id !== user.id ? 
                <Follow
                followers={user.followers}
                followings={user.followings}
                id={user.userId ? user.userId : user.id}
                meId={meUser.id}
              />
              : null}
          </div>
        </div>
      </div>
      <div>
        <h3>Seguidores:</h3>
        {user.followers?.length > 0 ? (
          user.followers?.map((f) => {
            return (
              <div className="pri">
                <Link to={meUser.id === f.id ? "/user" : `/users/${f.id}`}>
                  <img src={f.userImg} style={{height:"15%", width:"15%"}} alt="userImg"></img>
                  <p>{f.name}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>{user.name} todavia no tiene seguidores</p>
        )}
      </div>
      <div>
        <h3>Seguidos:</h3>
        {user.following?.length > 0 ? (
          user.following?.map((f) => {
            return (
              <div className="pri">
                <Link to={meUser.id === f.id ? "/user" : `/users/${f.id}`}>
                  <img src={f.userImg} style={{height:"15%", width:"15%"}} alt="userImg"></img>
                  <p>{f.name}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>{user.name} todavia no sigue a nadie</p>
        )}
      </div>
    </div>
  );
}
