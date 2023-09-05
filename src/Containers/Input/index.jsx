import React, {useContext, useEffect, useState} from "react";

//Styles

import styles from "./App.scss";


//Components


export default function Input({
    styleInput,
    onChange,
    onClick,
    style,
    type,
    placeholder,
    value
    }) {

    return (
        <div className={styles.App} style={style}>
            <input
                type={`${type}`}
                autoComplete="off"
                value={value}
                onChange={(e) => onChange ? onChange(e) : null}
                onClick={onClick}
                placeholder={placeholder}
                style={styleInput}
            />
        </div>
    )
}