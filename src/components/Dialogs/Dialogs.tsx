import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/1store";



type DialogsPropsType = {
    dialogsPage:DialogPageType
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}




export const Dialogs = (props: DialogsPropsType) => {

let state=props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem dialog={d} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m} key={m.id}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
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