import React, {useEffect, useState} from "react";

//Styles
import styles from "./App.scss";


//Components

export default function Button({text, cb, style, type}) {

    return (
        <div className={styles.App} style={style} onClick={cb}  >
            {text}
        </div>
    )
}