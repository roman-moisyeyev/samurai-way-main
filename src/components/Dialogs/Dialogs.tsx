import React from "react";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";



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