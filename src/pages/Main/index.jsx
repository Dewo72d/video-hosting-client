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
import Button from "../../Containers/Button";

export default function Main() {

    const dispatch = useDispatch();
    const { on } = modalSlice.actions

    const videos = useAppSelector(state => state.videoReducer)
    const user = useAppSelector(state => state.userReducer.user)

    const [page, setPage] = useState(1)


    async function click(video) {
        dispatch(on({ isOpen: true, modal: "video", modalData: video }))
    }

    async function init() {
        dispatch(fetchVideos(page))
    }

    useEffect(() => {
        console.log("INIT >>>? ? ");
        if (user !== null) {
            void init();
        }

    }, [user , page])


    return (
        user && <div className={styles.App}>
            {
                videos?.cards?.length > 0 ? videos.cards.map(el => (
                    <Card
                        video={el.id}
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
            <Button cb={() => setPage(page + 1)} text={"Load more"} />
        </div>
    )
}