import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../../css/users.css";
import ChangeProfileImg from "../ChangeProfileImg/ChangeProfileImg";

export default function OtherUserProfile() {
  //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params
  const history = useHistory();
  const [user, setUser] = useState({});
  const [showImg, setShowImg] = useState(true);

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
  }, [showImg]);
     
  return (
    <div className="detailBac">
      <div className="detail">
        <div className="carta">
            <div>
              <img src={user.userImg} alt="userImg"></img>
              <br />
            </div>
          <h3 className="userP">{user?.name}</h3>
          <p className="userP">{user?.email}</p>
          <p className="userP">Miembro desde {user?.createdDate}</p>
          <p className="userP">Usuario {user?.role}</p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
