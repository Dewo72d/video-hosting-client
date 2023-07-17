import React from "react";

//Styles
import styles from "./App.scss";

//Components
import Button from "../../Containers/Button";

//Redux
import {useDispatch} from "react-redux";
import {modalSlice} from "../../utils/store/reducers/changeModal";

export default function Header({}) {
    const dispatch = useDispatch();
    const {on} = modalSlice.actions;

    const upload = () => {
        dispatch(on({isOpen: true, modal: "upload", modalData: {}}));
    }


    return (
        <div className={styles.App}>
            <Button text={"Upload"} cb={upload}/>
        </div>
    )
}