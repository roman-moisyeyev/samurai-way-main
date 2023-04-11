import React from "react";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/state";


type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(elem => <DialogItem dialog={elem}/>)
    let messagesElements = props.messages.map(elem => <Message message={elem}/>)

    // let newMessageElement = React.createRef()
    //
    // const addMessage = () => {
    //     let message= newMessageElement.current.value
    //     alert(message)
    // }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}

            </div>
            <div>
                {/*<textarea ref={newMessageElement}></textarea>*/}
                {/*<button onClick={addMessage}>add message</button>*/}
            </div>


        </div>
    )
}