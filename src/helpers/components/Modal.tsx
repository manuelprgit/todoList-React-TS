import ReactDOM from "react-dom"

const modal: any = document.getElementById('modal');

const Modal = ({ children }: any) => {
    return ReactDOM.createPortal(
        <div className="modal-blocker"> {children} </div>,
        modal
    )
}

export { Modal }