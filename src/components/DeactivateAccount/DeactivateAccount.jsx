import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function DeactivateAccount() {
  const history = useHistory();
  const [user, setUser] = useState({});

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
        if (!data.active) {
          return history.push("/user/restore");
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
    localStorage.removeItem("active");
    history.push("/");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/user");
  };

  const handleDeactivate = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/api/back-end/users/deactivate`, {
      userId: user.id,
    });
    if (response.status === 200) {
      alert(response.data.OK); //cambiar por modal alert
      cerrarSesion();
    } else if (response.status === 409) {
      alert(response.data.Conflict); //cambiar por modal alert
      cerrarSesion();
    }
  };

  return (
    <div id="deativateAccount">
      <p>¿Deseas desactivar tu cuenta?</p>
      <p>Tendrás un mes para restablecerla si cambias de opinión</p>
      <button onClick={handleCancel}>Cancelar</button>
      <button id="desactivar" onClick={handleDeactivate}>
        Desactivar
      </button>
    </div>
  );
}
