import classnames from "classnames/bind";
import styles from "./ModalComp.module.scss";
import { useEffect } from "react";
const cb = classnames.bind(styles);

function ModalComp({ showModal = false, onClose = () => {}, children }) {
    
    useEffect(() => {
        const rootAddClass = () => {
            const body = document.querySelector("#root");
            body.classList.add("modal_isShowing")
        };
        const rootRemoveClass = () => {
            const body = document.querySelector("#root");
            body.classList.remove("modal_isShowing")
        };

        showModal ?  rootAddClass() :  rootRemoveClass();

        return () => {}
    }, [showModal]);

    return ( 
        <div className={cb('Modal', { 'show': showModal })}>
            <div onClick={onClose} className={cb("modal-fade")}></div>
            <div className={cb('modal-content')}>
               {children}
            </div>
        </div>
    );
}

export default ModalComp;