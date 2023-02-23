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
    id:number
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div className={classes.message}>{props.message}</div>
}

export const Dialogs = () => {

   let dialogs = [
       {id:1, name:"Roman"},
       {id:2, name:"Oleg"},
       {id:3, name:"Igor"},
       {id:4, name:"Vitaliy"},
       {id:5, name:"Sergey"},
       {id:6, name:"Aleksandr"},
   ]
    let messages = [
        {id:1, message:"hello!"},
        {id:2, message:"how are you?"},
        {id:3, message:"what is happened?"},
        {id:4, message:"Ok,i am understand."},
        {id:5, message:"Lets GO!"},

    ]

    let dialogsElements =  dialogs.map(d=> <DialogItem id={d.id} name={d.name} />)
    let messagesElements = messages.map(m=><Message id={m.id} message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}

            </div>

        </div>
    )
}