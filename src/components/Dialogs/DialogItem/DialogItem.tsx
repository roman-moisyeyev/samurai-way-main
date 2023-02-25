import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../App";

type DialogItemPropsType ={
    dialog:DialogItemType
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.dialog.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.dialog.name}</NavLink>
        </div>
    )
}


