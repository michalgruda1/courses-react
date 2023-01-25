import React from 'react';
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('/');
    }

    return (
        <React.Fragment>
            <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </React.Fragment>
    );
}

export default Modal;
