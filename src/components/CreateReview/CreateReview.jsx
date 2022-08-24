import axios from "axios";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import style from "../../css/songs.module.css";
import { useModal } from "../Modal/useModal";

export default function CreateReview({ apiId, type, name }) {
  const [isOpenAlert, openAlert, closeAlert] = useModal(false);

  const [review, setReview] = useState({
    title: "",
    score: 0,
    description: "",
  });

  const [error, setError] = useState({
    title: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const history = useHistory();

  const [user, setUser] = useState("");

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
        setUser(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    autenticarUsuario();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.entries(error).length === 0) {
      try {
        let response = await axios.post("/api/back-end/reviews/create", {
          apiId,
          type,
          name,
          title: review.title,
          score: review.score,
          description: review.description,
          userId: user.id,
        });
        setMessage(response.data);
      } catch (err) {
        throw new Error("No pudimos crear tu reseña");
      }
      //alert('Reseña creada existosamente');
      openAlert();
      //history.push("/feed");
    } else {
      if (review.title === "") return alert("Ingrese un titulo de reseña");
      if (error.title) return alert(error.title);
      if (error.description) return alert(error.description);
    }
  };

  const handleChange = (e) => {
    // e.preventDefault();
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
    setError(validateInput({ ...review, [e.target.name]: e.target.value }));
  };

  const onCloseRedirect = () => {
    history.push("/feed");
  };

  return (
    <div>
      <Modal isOpen={isOpenAlert} onClose={onCloseRedirect}>
        <h4>{message}</h4>
      </Modal>
      <div className={style.createReview}>
        <h3>Crear reseña</h3>
        <form onSubmit={handleSubmit}>
          <input
            id="reviewTitle"
            type="text"
            placeholder="Título"
            name="title"
            onChange={handleChange}
          />
          <p className={style.danger}>{error.title}</p>
          <div className={style.score}>
            <p>Calificación:</p>
            {/* <input
            type="range"
            id="reviewScore"
            name="score"
            min="0"
            max="5"
            step="1"
            onChange={handleChange}
          /> */}
            <div className={style.selectedScore}>
              <input
                key={"radio1"}
                id="radio1"
                type="radio"
                name="score"
                value={5}
                onChange={handleChange}
              />{" "}
              <label htmlFor="radio1">★</label>
              <input
                key={"radio2"}
                id="radio2"
                type="radio"
                name="score"
                value={4}
                onChange={handleChange}
              />{" "}
              <label htmlFor="radio2">★</label>
              <input
                key={"radio3"}
                id="radio3"
                type="radio"
                name="score"
                value={3}
                onChange={handleChange}
              />{" "}
              <label htmlFor="radio3">★</label>
              <input
                key={"radio4"}
                id="radio4"
                type="radio"
                name="score"
                value={2}
                onChange={handleChange}
              />{" "}
              <label htmlFor="radio4">★</label>
              <input
                key={"radio5"}
                id="radio5"
                type="radio"
                name="score"
                value={1}
                onChange={handleChange}
              />{" "}
              <label htmlFor="radio5">★</label>
            </div>
          </div>

          <textarea
            name="description"
            id="reviewText"
            placeholder="¡Tu reseña!"
            rows="4"
            columns="50"
            onChange={handleChange}
          />
          <p className={style.danger}>{error.description}</p>
          <input
            type="submit"
            value="Crear reseña"
            className={style.btn_createReview}
          />
        </form>
      </div>
    </div>
  );
}

export function validateInput(input) {
  let error = {};
  if (input.title.length === 0) {
    error.title = "* Título de reseña es requerido";
  }

  if (input.description.length === 0) {
    error.description = "* Descripción de reseña es requerida";
  }
  return error;
}
