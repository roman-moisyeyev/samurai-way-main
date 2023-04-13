import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/store";

type DialogItemPropsType = {
   dialog:DialogType
}

export const DialogItem = (props:DialogItemPropsType) => {
    let path = "/dialogs/" + props.dialog.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.dialog.name}</NavLink>
        </div>
    )
}


