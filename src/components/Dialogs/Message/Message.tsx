import React from "react";
import classes from './../Dialogs.module.css'
import {MessageType} from "../../../App";



type MessagePropsType={
    message:MessageType
}

export const Message = (props: MessagePropsType) => {
    return <div className={classes.message}>{props.message.message}</div>
}
