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
   let dialogsData = [
       {id:1, name:"Roman"},
       {id:2, name:"Oleg"},
       {id:3, name:"Igor"},
       {id:4, name:"Vitaliy"},
       {id:5, name:"Sergey"},
       {id:6, name:"Aleksandr"},
   ]
 let messagesData = [
       {id:1, message:"hello!"},
       {id:2, message:"how are you?"},
       {id:3, message:"what is happened?"},
       {id:4, message:"Ok,i am understand."},
       {id:5, message:"Lets GO!"},
   ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>



            </div>
            <div className={classes.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message}/>
                <Message id={messagesData[1].id} message={messagesData[1].message}/>

            </div>

        </div>
    )
}