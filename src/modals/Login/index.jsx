import React, { useEffect, useState } from "react";

//Styles
import styles from "./App.scss";

//Components
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import Input from "../../Containers/Input"
import Button from "../../Containers/Button"


//Redux
import { useDispatch } from "react-redux";
import { modalSlice } from "../../utils/store/reducers/changeModal";

//Utils
import { request } from "../../utils/utils"

export default function Login({ modalData }) {

    const dispatch = useDispatch();
    const { off } = modalSlice.actions;

    useEffect(() => {

        console.log("MODAL DATA >>> ", modalData)

    }, [modalData]);

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const sign = async (type) => {
        console.log("daTA >>>> ", username, password);
        const res = await request({
            method: "POST",
            path: `auth/${type}`,
            data: {
                username,
                password
            }

            });

            console.log("RES LOGIN >>>> " , res);
    }

    
    return (
        <div className={styles.App}>
            <Close className={styles.close} onClick={() => dispatch(off())} />

            <div className={styles.form}>
                <Input value={username} onChange={e => setUsername(e.target.value)} placeholder={'Username'} />
                <Input value={password} onChange={e => setPassword(e.target.value)} placeholder={'Password'} />
            </div>
            <Button text={"Sign in"} cb={() => sign("login")} />
            <Button text={"Sign up"} cb={() => sign("signup")} />
        </div>
    )
}