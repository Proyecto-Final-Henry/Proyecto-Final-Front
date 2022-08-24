import "./modal.css"

const Modal = ({ children, isOpen, onClose }) => {
    const handlerStopPropagation= (e)=> e.stopPropagation();
    return (
        <div className={`modal ${isOpen && "is-open"}`} onClick={onClose} >
            <div className="modal-container" onClick={handlerStopPropagation}>
                <button className="modal-close" onClick={onClose}>X</button>
                <br />
                {children} 
            </div>
        </div>
    )
}
export default Modal