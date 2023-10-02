import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//Components
import Main from './Main';

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
        <Routes>
            <Route index={true} path="/" element={<Main />} />
        </Routes>
    );
}