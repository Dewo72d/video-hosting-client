import React, { useContext, useEffect, useState } from "react";


//Styles
import styles from "./App.scss";

//Component
import Input from "../../Containers/Input";
import Button from "../../Containers/Button";
import Card from "../../Containers/Card";

//Redux
import { useAppSelector } from "../../utils/hooks/redux";
import { useDispatch } from "react-redux";
import { changeUsername, getUser, changePassword } from "../../utils/store/reducers/user";
import { fetchVideosByUser } from "../../utils/store/reducers/videos";
export default function Profile() {

    const dispatch = useDispatch();

    const user = useAppSelector(state => state.userReducer.user)
    const videos = useAppSelector(state => state.videoReducer.cards)
    const [cards, setCards] = useState([]);

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("");

    const submitChangeUsername = async () => {
        if (username.length === 0 || user === null) return alert("Error");
        dispatch(changeUsername({ username: username }))
        dispatch(getUser())
    }

    const submitChangePassword = async () => {
        if (password.length === 0 || user === null) return alert("Error");
        dispatch(changePassword({ password: password }))
        dispatch(getUser())
    }

    const init = async () => {
        dispatch(fetchVideosByUser({ name: user.username, id: user.id }))
    }

    useEffect(() => {
        if (user) {
            void init();
        }
    }, [user]);

    useEffect(() => {
        if (videos.length > 0) {
            const arr = [...videos].reverse();
            console.log(videos);
            return setCards(arr)
        }
    }, [videos]);


    return (
        <div className={styles.App}>

            <div className={styles.control}>
                <div className={styles.section}>
                    <Input value={username} onChange={e => setUsername(e.target.value)} placeholder={'Change username'} />
                    <Button text={"Submit"} cb={() => submitChangeUsername()} />
                </div>

                <div className={styles.section}>
                    <Input type={"password"} value={password} onChange={e => setPassword(e.target.value)} placeholder={'Change password'} />
                    <Button text={"Submit"} cb={() => submitChangePassword()} />
                </div>
            </div>

            <div className={styles.videos}>
                {
                    cards.map((el,i) => (
                        <Card
                            video={el.video}
                            id={el.id}
                            name={el.name}
                            username={user.username}
                            description={el.description}
                            user_id={el.user_id}
                            key={`video-${i}`}
                            canDelete
                        />
                    ))
                }
            </div>
        </div >
    )
}