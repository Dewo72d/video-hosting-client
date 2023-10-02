import React, { useEffect } from "react";

//Styles
import styles from "./App.scss";

//Components
import Button from "../../Containers/Button";

//Redux
import { useAppSelector } from "../../utils/hooks/redux";
import { useDispatch } from "react-redux";
import { modalSlice } from "../../utils/store/reducers/changeModal";
import { logOutUser } from "../../utils/store/reducers/user";

export default function Header({ }) {
    const dispatch = useDispatch();
    const { on } = modalSlice.actions;

    const user = useAppSelector(state => state.userReducer.user)

    const openModal = (modal, data) => {
        dispatch(on({ isOpen: true, modal: modal, modalData: data ? data : {} }));
    }

    const logOut = () => {
        dispatch(logOutUser());
    }

    return (
        <div className={styles.App}>
            {
                user ?
                    <div className={styles.header}>
                        <span className={styles.username}>{user?.username}</span>
                        <div className={styles.wrapper}>
                            <Button text={"Upload"} cb={() => openModal("upload")} />
                            <Button text={"Log out"} cb={() => logOut()} />
                        </div>
                    </div>
                    :
                    <Button text={"Login"} cb={() => openModal("login")} />
            }
        </div>
    )
}