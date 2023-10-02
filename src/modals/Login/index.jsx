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
import { signUser } from "../../utils/store/reducers/user";

export default function Login() {

    const dispatch = useDispatch();
    const { off } = modalSlice.actions;


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.App}>
            <Close className={styles.close} onClick={() => dispatch(off())} />

            <div className={styles.form}>
                <Input value={username} onChange={e => setUsername(e.target.value)} placeholder={'Username'} />
                <Input value={password} onChange={e => setPassword(e.target.value)} placeholder={'Password'} />
            </div>
            <Button text={"Sign in"} cb={() => dispatch(signUser({ type: "login", password: password, username: username }))} />
            <Button text={"Sign up"} cb={() => dispatch(signUser({ type: "signup", password: password, username: username }))} />
        </div>
    )
}