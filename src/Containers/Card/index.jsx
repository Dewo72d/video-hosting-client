import React from "react";
import { useNavigate } from 'react-router-dom';


//Styles
import styles from "./App.scss";

//Components
import Clown from "../../assets/images/clown.png";

//Redux
import { modalSlice } from "../../utils/store/reducers/changeModal";
import { deleteVideo } from "../../utils/store/reducers/user";
import { fetchVideosByUser } from "../../utils/store/reducers/videos";
import { useDispatch } from "react-redux";
import Button from "../Button";

export default function Card({ id, user_id, username, name, description, video, cb , canDelete}) {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { on } = modalSlice.actions

    const goTochannel = () => {
        navigate(`/channel/${username}/${user_id}`)
    }

    const  click = async () => {
        dispatch(on({ isOpen: true, modal: "video", modalData: { video } }))
    }

    const delVideo = async () => {
        dispatch(deleteVideo({id:id}));
        dispatch( fetchVideosByUser({name:username, id:user_id}))
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
                <div className={`${styles.info} ${styles.link}`} >
                    <span onClick={goTochannel}>{username}</span>
                    {canDelete && <Button text={'Delete'} cb={delVideo} />}
                </div>
            </div>
        </div>
    )
}