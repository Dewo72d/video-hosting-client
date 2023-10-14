import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from "./App.scss";

//Components
import Main from './Main';
import Profile from './Profile'
import Channel from './Channel'

//Redux
import { getUser } from '../utils/store/reducers/user';
import { useDispatch } from "react-redux";


export default function App() {

    const dispatch = useDispatch();

    const init = async () => {
        dispatch(getUser())
    }

    useEffect(() => {
        void init();
    }, [])

    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/channel/:name/:id" element={<Channel />} />
            </Routes>
        </div>
    );
}