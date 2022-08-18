import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function RestoreAccount() {
  const history = useHistory();
  const [user, setUser] = useState({});

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
        if (data.active) {
          return history.push("/feed");
        }
        setUser(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    autenticarUsuario();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const handleRestore = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/api/back-end/users/restore`, {
      userId: user.id,
    });
    if (response.status === 410) {
      alert(response.data.Gone);
      return history.push("/");
    } else if (response.status === 202) {
      alert(response.data.Accepted);
      return history.push("/feed");
    } else {
      return history.push("/");
    }
  };

  return (
    <div>
      <p>{`¡Hola de nuevo, ${user.name}!`}</p>
      <p>¿Quieres restaurar tu cuenta?</p>
      <p>Todas tus reseñas e interacciones siguen aquí</p>
      <button onClick={cerrarSesion}>Cancelar</button>
      <button onClick={handleRestore}>Aceptar</button>
    </div>
  );
}
