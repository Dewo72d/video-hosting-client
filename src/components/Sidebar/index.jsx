import React from "react";
import { Link } from 'react-router-dom';

//Styles
import styles from "./App.scss";

//Components

const links = [
    {
        name: "Main",
        value: "/"
    },
    {
        name: "Profile",
        value: "/profile"
    },
]

export default function Sidebar({ }) {

    return (
        <div className={styles.App}>
            {
                links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.value}
                    >
                        {link.name}
                    </Link>)
                )
            }
        </div>
    )
}