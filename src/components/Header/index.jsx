import React from "react";

//Styles
import styles from "./App.scss";

//Components
import Button from "../../Containers/Button";

//Redux
import { useDispatch } from "react-redux";
import { modalSlice } from "../../utils/store/reducers/changeModal";

export default function Header({ }) {
    const dispatch = useDispatch();
    const { on } = modalSlice.actions;


    const openModal = (modal, data) => {
        dispatch(on({ isOpen: true, modal: modal, modalData: data ? data : {} }));
    }

    return (
        <div className={styles.App}>
            <Button text={"Upload"} cb={() => openModal("upload")} />
            <Button text={"Login"}  cb={() => openModal("login")} />
        </div>
    )
}