import React from "react";
import classes from './Dialogs.module.css'

export const Dialogs = () => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Roman</div>
                <div className={classes.dialog}>Oleg</div>
                <div className={classes.dialog}>Oleksandr</div>
                <div className={classes.dialog}>Sergey</div>
                <div></div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>hi!</div>
                <div className={classes.message}>hello!</div>
                <div className={classes.message}>how are you?</div>
                <div className={classes.message}>what is happened?</div>
            </div>

        </div>
    )
}