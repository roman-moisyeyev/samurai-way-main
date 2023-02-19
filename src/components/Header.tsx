import React from "react";
import classes from './Header.module.css'

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/The_social_network.svg" alt="logo"/>
        </header>
    )
}