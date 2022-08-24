import axios from "axios";
import { useState, useEffect } from "react";
import admin from "../../css/adminPanel.module.css";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const allUsers = async () => {
      try {
        const { data } = await axios(`/api/back-end/user`);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    allUsers([]);
  }, []);

  console.log(users);

  let handlePremium = async (id) => {
    if (window.confirm("otorgar premium")) {
      await axios.put(`/api/back-end/users/givepremium`, { userId: id });
      const { data } = await axios(`/api/back-end/user`);
      setUsers(data);
    }
  };

  let unhandlePremium = async (id) => {
    if (window.confirm("remover premium")) {
      await axios.put(`/api/back-end/users/takepremium`, { userId: id });
      const { data } = await axios(`/api/back-end/user`);
      setUsers(data);
    }
  };

  let handleBan = async (id) => {
    if (window.confirm("eliminar cuenta")) {
      await axios.put(`/api/back-end/users/deactivate?role=admin`, {
        userId: id,
      });
      const { data } = await axios(`/api/back-end/user`);
      setUsers(data);
    }
  };

  let handleDeactivate = async (id) => {
    if (window.confirm("desactivar usuario")) {
      await axios.put(`/api/back-end/users/deactivate`, { userId: id });
      const { data } = await axios(`/api/back-end/user`);
      setUsers(data);
    }
  };

  let handleReactivate = async (id) => {
    if (window.confirm("reactivar usuario")) {
      await axios.put(`/api/back-end/users/restore`, { userId: id });
      const { data } = await axios(`/api/back-end/user`);
      setUsers(data);
    }
  };

  let handleAdmin = async (id) => {
    if (window.confirm("otorgar admin")) {
      await axios.put(`/api/back-end/users/giveadmin`, { userId: id });
      const { data } = await axios(`/api/back-end/user`);
      setUsers(data);
    }
  };

  let unhandleAdmin = async (id) => {
    if (window.confirm("quitar admin")) {
      await axios.put(`/api/back-end/users/takeadmin`, { userId: id });
      const { data } = await axios(`/api/back-end/user`);
      setUsers(data);
    }
  };

  return (
    <div className={admin.component}>
      <div className={admin.list}>
        Usuarios Gratuitos
        {users &&
          users.map((u) =>
            u.active === true &&
            u.role === "Gratuito" &&
            u.confirmado === true ? (
              <div className={admin.user}>
                <div>
                  <img
                    src={u.userImg}
                    alt="usuario"
                    className={admin.userImg}
                    style={{ width: "50px", height: "50px", margin: "15px" }}
                  />
                  <div className={admin.userInfo} style={{ display: "inline" }}>
                    {u.name}
                    <br />
                    Creado: {u.createdDate}
                  </div>
                  <div>
                    <button
                      style={{ margin: "3px" }}
                      className="btn btn-success"
                      onClick={() => handlePremium(u.id)}
                    >
                      {" "}
                      Premium{" "}
                    </button>
                    {u.active ? (
                      <button
                        style={{ margin: "3px" }}
                        className="btn btn-warning"
                        onClick={() => handleDeactivate(u.id)}
                      >
                        {" "}
                        Desactivar{" "}
                      </button>
                    ) : (
                      <button
                        style={{ margin: "3px" }}
                        className="btn btn-warning"
                        onClick={() => handleReactivate(u.id)}
                      >
                        {" "}
                        Reactivar{" "}
                      </button>
                    )}
                    <button
                      style={{ margin: "3px" }}
                      className="btn btn-danger"
                      onClick={() => handleBan(u.id)}
                    >
                      {" "}
                      Banear{" "}
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
      </div>
      <div className={admin.list}>
        Usuarios Premium
        {users &&
          users.map((u) =>
            u.active === true && u.role === "Premium" ? (
              <div className={admin.user}>
                <div>
                  <img
                    src={u.userImg}
                    alt="usuario"
                    className={admin.userImg}
                    style={{ width: "50px", height: "50px", margin: "15px" }}
                  />
                  <div className={admin.userInfo} style={{ display: "inline" }}>
                    {u.name}
                    <br />
                    Creado: {u.createdDate}
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => unhandlePremium(u.id)}
                    >
                      Quitar Premium
                    </button>
                    <button
                      style={{ margin: "3x" }}
                      className="btn btn-success"
                      onClick={() => handleAdmin(u.id)}
                    >
                      {" "}
                      Admin{" "}
                    </button>
                    {u.active ? (
                      <button
                        style={{ margin: "3px" }}
                        className="btn btn-warning"
                        onClick={() => handleDeactivate(u.id)}
                      >
                        {" "}
                        Desactivar{" "}
                      </button>
                    ) : (
                      <button
                        style={{ margin: "3px" }}
                        className="btn btn-warning"
                        onClick={() => handleReactivate(u.id)}
                      >
                        {" "}
                        Reactivar{" "}
                      </button>
                    )}
                    <button
                      style={{ margin: "3px" }}
                      className="btn btn-danger"
                      onClick={() => handleBan(u.id)}
                    >
                      {" "}
                      Banear{" "}
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
      </div>
      <div className={admin.list}>
        Administradores
        {users &&
          users?.map((u) =>
            u.role === "Admin" ? (
              <div className={admin.user}>
                <div>
                  <img
                    src={u?.userImg}
                    alt="usuario"
                    className={admin.userImg}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div>
                    {u?.name}
                    <br />
                    Creado: {u.createdDate}
                    <div>
                      <button
                        style={{ margin: "3px" }}
                        className="btn btn-secondary"
                        onClick={() => unhandleAdmin(u.id)}
                      >
                        {" "}
                        Quitar{" "}
                      </button>
                      {u.active ? (
                        <button
                          style={{ margin: "3px" }}
                          className="btn btn-warning"
                          onClick={() => handleDeactivate(u.id)}
                        >
                          {" "}
                          Desactivar{" "}
                        </button>
                      ) : (
                        <button
                          style={{ margin: "3px" }}
                          className="btn btn-warning"
                          onClick={() => handleReactivate(u.id)}
                        >
                          {" "}
                          Reactivar{" "}
                        </button>
                      )}
                      <button
                        style={{ margin: "3px" }}
                        className="btn btn-danger"
                        onClick={() => handleBan(u.id)}
                      >
                        {" "}
                        Banear{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
      </div>
      <div className={admin.list}>
        Usuarios Inactivos
        {users &&
          users.map((u) =>
            u.active === false && u.confirmado === true ? (
              <div className={admin.user}>
                <div>
                  <img
                    src={u.userImg}
                    alt="usuario"
                    className={admin.userImg}
                    style={{ width: "50px", height: "50px", margin: "15px" }}
                  />
                  <div className={admin.userInfo} style={{ display: "inline" }}>
                    {u.name}
                    <br />
                    Creado: {u.createdDate}
                  </div>
                  <div>
                    <button
                      style={{ margin: "3px" }}
                      className="btn btn-success"
                      onClick={() => handlePremium(u.id)}
                    >
                      {" "}
                      Premium{" "}
                    </button>
                    {u.active ? (
                      <button
                        style={{ margin: "3px" }}
                        className="btn btn-warning"
                        onClick={() => handleDeactivate(u.id)}
                      >
                        {" "}
                        Desactivar{" "}
                      </button>
                    ) : (
                      <button
                        style={{ margin: "3px" }}
                        className="btn btn-warning"
                        onClick={() => handleReactivate(u.id)}
                      >
                        {" "}
                        Reactivar{" "}
                      </button>
                    )}
                    <button
                      style={{ margin: "3px" }}
                      className="btn btn-danger"
                      onClick={() => handleBan(u.id)}
                    >
                      {" "}
                      Banear{" "}
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}
