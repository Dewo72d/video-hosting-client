import React, { useContext, useEffect, useState } from "react";


//Styles
import styles from "./App.scss";

//Component
import Card from "../../Containers/Card";
import { request } from "../../utils/utils";

//Redux
import { useAppSelector } from "../../utils/hooks/redux";
import { modalSlice } from "../../utils/store/reducers/changeModal";
import { fetchVideos } from "../../utils/store/reducers/videos";
import { useDispatch } from "react-redux";

export default function Main() {

    const dispatch = useDispatch();
    const { on } = modalSlice.actions

    const videos = useAppSelector(state => state.videoReducer)
    const [cards, setCards] = useState([])

    const user = useAppSelector(state => state.userReducer.user)


    async function click(video) {
        dispatch(on({ isOpen: true, modal: "video", modalData: { video } }))
    }

    async function init() {
        dispatch(fetchVideos())
    }

    useEffect(() => {
        void init();
    }, []);

    useEffect(() => {
        if (videos.cards.length > 0) {
            const arr = [...videos.cards].reverse();
            return setCards(arr)
        }
    }, [videos])


    return (
        <div className={styles.App}>
            {
                (user && cards.length > 0) ? cards.map((el) => (
                    <Card
                        video={el.video}
                        id={el.id}
                        name={el.name}
                        username={el.user.username}
                        description={el.description}
                        user_id={el.user_id}
                        cb={click}
                        key={el.id}
                    />
                )) : <></>
            }
        </div>
    )
}