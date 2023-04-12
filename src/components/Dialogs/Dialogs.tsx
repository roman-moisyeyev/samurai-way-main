import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionsTypes, DialogType, MessageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";


type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
    dispatch:(action:ActionsTypes)=>void
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(elem => <DialogItem dialog={elem}/>)
    let messagesElements = props.messages.map(elem => <Message message={elem}/>)
    let newMessageBody = props.newMessageBody


    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>

            </div>
            <div>
                {/*<textarea ref={newMessageElement}></textarea>*/}
                {/*<button onClick={addMessage}>add message</button>*/}
            </div>


        </div>
    )
}