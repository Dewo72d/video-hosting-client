import React from "react";
import {BrowserRouter} from 'react-router-dom';

import styles from "./App.scss";

import Content from "./pages";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Modals from "./modals";

export default function App() {

    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header/>
                <div className={styles.wrapper}>
                    <Sidebar/>
                    <Content/>
                    <Modals/>
                </div>
            </div>
        </BrowserRouter>
    );
}
