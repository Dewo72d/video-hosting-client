import React, { MouseEventHandler, useContext, useEffect, useState } from "react";

//Styles
import styles from "./App.scss";

//Components
import Clown from "../../assets/images/clown.png";

import { request } from "../../utils/utils";



export default function Card({ id, username, name, description, video, cb }) {

    return (
        <div className={styles.App} onClick={() => cb(video)}>
            <div className={styles.preview}>
                <img src={Clown} alt={""} />
            </div>

            <div className={styles.wrapper}>
            <div className={styles.info}>
                <span>{name}</span>
                <span>{description}</span>
            </div>
            <div className={styles.info}>
                <span>{username}</span>
            </div>
            </div>
        </div>
    )
}