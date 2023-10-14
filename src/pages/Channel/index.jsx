import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Styles
import styles from "./App.scss";

//Component
import Card from "../../Containers/Card"

//Redux
import { useAppSelector } from "../../utils/hooks/redux";
import { fetchVideosByUser } from "../../utils/store/reducers/videos"
import { useDispatch } from "react-redux";

export default function Channel() {
    const { id, name } = useParams();

    const [cardsVideos, setCardsVideos] = useState([])

    const dispatch = useDispatch();
    const { cards } = useAppSelector(state => state.videoReducer)

    const init = async () => {
        dispatch(fetchVideosByUser({ name, id }))
    }

    useEffect(() => {
        void init();
    }, []);

    useEffect(() => {
        console.log("VIDEOS >>> ", cards);
    }, [cards]);

    async function click(video) {
        dispatch(on({ isOpen: true, modal: "video", modalData: { video } }))
    }


    useEffect(() => {
        if (cards.length > 0) {
            const arr = [...cards].reverse();
            return setCardsVideos(arr)
        }
    }, [cards])

    return (
        <div className={styles.App}>
            <div className={styles.header}>
                <span>Channel: {name}</span>
            </div>

            <div className={styles.videos}>
                {
                    cards?.length > 0 && cardsVideos.map(el => (
                        <Card
                            video={el.video}
                            id={el.id}
                            name={el.name}
                            username={name}
                            description={el.description}
                            user_id={el.user_id}
                            key={el.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}