import React, { useContext, useEffect, useState } from "react";


//Styles
import styles from "./App.scss";

//Component
import Card from "../../Containers/Card";
import { request } from "../../utils/utils";

//Redux
import ReactPlayer from "react-player";
import { useAppSelector } from "../../utils/hooks/redux";
import { modalSlice } from "../../utils/store/reducers/changeModal";
import { cardSlice, fetchVideos } from "../../utils/store/reducers/videos";
import { useDispatch } from "react-redux";
import { AsyncThunkAction } from "@reduxjs/toolkit";

export default function Main() {

    const dispatch = useDispatch();
    const { on } = modalSlice.actions

    const videos = useAppSelector(state => state.videoReducer)
    const [cards, setCards] = useState([])


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
            <div className={styles.cards}>
                {cards.length > 0 && cards.map((el) => (
                    <Card
                        video={el.video}
                        id={el.id}
                        name={el.name}
                        description={el.description}
                        cb={click}
                        key={el.video}
                    />
                ))}
            </div>
        </div>
    )
}