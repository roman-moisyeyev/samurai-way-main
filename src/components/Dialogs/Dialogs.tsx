import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div className={classes.message}>{props.message}</div>
}

export const Dialogs = () => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Roman'} id={1}/>
                <DialogItem name={'Oleg'} id={2}/>
                <DialogItem name={'Igor'} id={3}/>
                <DialogItem name={'Vitaliy'} id={4}/>
                <DialogItem name={'Sergey'} id={5}/>


            </div>
            <div className={classes.messages}>
                <Message message={'hi'}/>
                <Message message={'hello!'}/>
                <Message message={'how are you?'}/>
                <Message message={'what is happened?'}/>
                <Message message={'Ok,i am understand'}/>
                <Message message={'Lets GO!'}/>
            </div>

        </div>
    )
}