import React from "react";
import classes from './../Dialogs.module.css'
import {MessageType} from "../../../redux/state";

type MessagePropsType = {
    message: MessageType
}


export const Message = (props: MessagePropsType) => {
    return <div className={classes.message}>{props.message.message}</div>
}
