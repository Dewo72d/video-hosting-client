import React from "react";
import { useNavigate } from 'react-router-dom';


//Styles
import styles from "./App.scss";

//Components
import Clown from "../../assets/images/clown.png";

//Redux
import { modalSlice } from "../../utils/store/reducers/changeModal";
import { useDispatch } from "react-redux";

export default function Card({ id, user_id, username, name, description, video, cb }) {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { on } = modalSlice.actions

    const goTochannel = () => {
        navigate(`/channel/${username}/${user_id}`)
    }

    async function click() {
        dispatch(on({ isOpen: true, modal: "video", modalData: { video } }))
    }

    return (
        <div className={styles.App} >
            <div className={styles.preview} onClick={() => !!cb ? cb(video) : click()}>
                <img src={Clown} alt={""} />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <span>{name}</span>
                    <span>{description}</span>
                </div>
                <div className={`${styles.info} ${styles.link}`} onClick={goTochannel}>
                    <span>{username}</span>
                </div>
            </div>
        </div>
    )
}