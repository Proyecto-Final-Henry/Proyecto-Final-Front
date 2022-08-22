import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getPlaylist } from "../../redux/actions";
import { useModal } from "../Modal/useModal";
import Modal from "../Modal/Modal";


export default function DeletePlaylist(props){
    let dispatch = useDispatch();
    const [isOpenAlert, openAlert, closeAlert] = useModal(false);

    const handleButtonDelete = async () => {
        await axios.put(`http://localhost:3001/api/back-end/playlist//delete/${props.id}`)
        dispatch(getPlaylist(props.userId))
    };

    const handleButton = () => {
        openAlert()
    };

    return(
        <div>
            <button onClick={() => handleButton()}>Eliminar Playlist</button>
            <Modal isOpen={isOpenAlert} onClose={closeAlert}>
            <h4>¿Esta seguro que desea borrar esta Playlist?</h4>
            <button onClick={() => handleButtonDelete()}>Si</button>
            <button onClick={closeAlert}>No</button>
            </Modal>
        </div>
    );
};