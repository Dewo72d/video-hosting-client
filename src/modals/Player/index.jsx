import React, {useContext, useEffect, useState} from "react";

//Styles
import styles from "./App.scss";

//Components
import ReactPlayer from "react-player";
import {ReactComponent as Close} from "../../assets/icons/close.svg";

//Redux
import {useDispatch} from "react-redux";
import {modalSlice} from "../../utils/store/reducers/changeModal";

export default function Player({modalData}) {

    const dispatch = useDispatch();
    const {off} = modalSlice.actions;

    useEffect(() => {
        console.log("MODAL DATA >>> ", modalData)
    }, [modalData]);

    return (
        <div className={styles.App}>
            <Close className={styles.close} onClick={() => dispatch(off())}/>
            <ReactPlayer
                controls
                playing={true}
                width={"100%"}
                height={"100%"}
                url={`https://api.dewo.pp.ua/videos/video/${modalData?.video}`}
            />
        </div>
    )
}