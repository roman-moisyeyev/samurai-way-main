import React, {ChangeEvent} from "react";
import {Dialogs} from "../Dialogs";
import {StoreType} from "../../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";


type DialogsPropsType = {
    store:StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let state=props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state} />
    )
}