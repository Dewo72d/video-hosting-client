import React from "react";

//Styles
import styles from "./App.scss";

//Components
import Player from "./Player";
import Upload from "./Upload";
import Login from "./Login";

//Redux
import { useAppSelector } from "../utils/hooks/redux";
import { useDispatch } from "react-redux";
import { modalSlice } from "../utils/store/reducers/changeModal";

export default function Modals() {


    const modal = useAppSelector(state => state.modalReducer)
    const dispatch = useDispatch();
    const { off } = modalSlice.actions



    const selectModal = ({ modal, modalData }) => {
        if (modal === null) return;
        switch (modal) {
            case "video":
                return <Player modalData={modalData} />
            case "upload":
                return <Upload />
            case "login":
                return <Login />
        }
    }

    const disableModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(off())
        }
    }

    return modal.isOpen ? (
        <div
            className={styles.App}
            onMouseDown={disableModal}
        >
            {selectModal(modal)}
        </div>
    ) : null
}