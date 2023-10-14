import React, { useContext, useEffect, useState } from "react";


//Styles
import styles from "./App.scss";

//Component


//Redux
import { useAppSelector } from "../../utils/hooks/redux";
import { useDispatch } from "react-redux";

export default function Profile() {

    const dispatch = useDispatch();



    async function init() {
        
    }

    useEffect(() => {
        //void init();
    }, []);


    return (
        <div className={styles.App}>
            Profile
        </div>
    )
}