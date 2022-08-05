import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";

export default function CreateReview() {
  const [review, setReview] = useState({
    title: "",
    score: 0,
    description: "",
    type: "",
    name: "",
  });

  const history = useHistory();

  const [user, setUser] = useState("");

  const apiId = useParams().id;

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
        const { data } = await axios(
          `http://localhost:3001/api/back-end/users/perfil`,
          config
        );
        setUser(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    autenticarUsuario();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        {
          apiId,
          title: review.title,
          score: review.score,
          description: review.description,
          type: review.type,
          name: review.name,
          userId: user.id,
        },
        "http://localhost:3001/api/back-end/reviews/create"
      );
    } catch (err) {
      throw new Error("No pudimos crear tu review");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear reseña</h3>
      <input
        id="reviewTitle"
        type="text"
        placeholder="Título"
        name="title"
        onChange={handleChange}
      />
      <label>Calificación</label>
      {/* <select id="reviewScore" name="score" onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select> */}
      <input
        type="range"
        id="reviewScore"
        name="score"
        min="0"
        max="5"
        value="0"
        step="1"
        onChange={handleChange}
      />
      <textarea
        name="description"
        id="reviewText"
        placeholder="¡Tu reseña!"
        rows="4"
        columns="50"
        onChange={handleChange}
      />
      <select id="reviewType" name="type" onChange={handleChange}>
        <option value={"artist"}>artista</option>
        <option value={"album"}>álbum</option>
        <option value={"song"}>canción</option>
      </select>
      <input
        type="text"
        id="reviewName"
        placeholder="Nombre"
        name="name"
        onChange={handleChange}
      />
      <input type="submit" value="Crear reseña" />
    </form>
  );
}
