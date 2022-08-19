import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useModal } from "../Modal/useModal";

export default function RestoreAccount() {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [isOpenAlert, openAlert, closeAlert] = useModal(false);

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }
      const active = localStorage.getItem("active");
      if (active !== "false") {
        history.push("/feed");
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

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("active");
    history.push("/");
  };

  const handleRestore = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/api/back-end/users/restore`, {
      userId: user.id,
    });
    if (response.status === 410) {
      setMessage(response.data.Gone);
      return openAlert();
    } else if (response.status === 202) {
      setMessage(`${response.data.Accepted}. Vuelve a iniciar sesión`);
      return openAlert();
    } else {
      return cerrarSesion();
    }
  };

  return (
    <div>
      <Modal isOpen={isOpenAlert} onClose={cerrarSesion}>
        <h4>{message}</h4>
      </Modal>
      <div>
        <p>{`¡Hola de nuevo, ${user.name}!`}</p>
        <p>¿Quieres restaurar tu cuenta?</p>
        <p>Todas tus reseñas e interacciones siguen aquí</p>
        <button onClick={cerrarSesion}>Cancelar</button>
        <button onClick={handleRestore}>Aceptar</button>
      </div>
    </div>
  );
}
