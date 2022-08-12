import axios from "axios";
import { useState } from "react";

export default function ChangeProfileImg({ userId, setShowImg }) {
  const [previewSource, setpreviewSource] = useState();

  const handleImgLoad = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
    };
    document.getElementById("submitImg").disabled = false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (previewSource) {
      const response = await uploadImage(previewSource);
      setShowImg(true);
      return response;
    }
  };

  const uploadImage = async (base64Img) => {
    try {
      const uploadedResponse = await axios.post(
        "http://localhost:3001/api/back-end/users/profileImg",
        { data: base64Img, userId: userId }
      );
      return uploadedResponse.data;
    } catch (error) {}
  };

  return (
    <div>
      <h3>Elige una imagen de perfil</h3>
      {previewSource && (
        <img src={previewSource} alt="perfil" id="previewImg" />
      )}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImgLoad}
            name="profilePic"
          />
          <input type="submit" value="Cambiar imagen" id="submitImg" disabled />
        </form>
      </div>
    </div>
  );
}
