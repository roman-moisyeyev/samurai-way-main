import React, {ChangeEvent} from "react";
import {Dialogs} from "../Dialogs";
import {StoreType} from "../../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";


type DialogsPropsType = {
    store:StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    return <StoreContext.Consumer>
        {
        (store)=>{

            // @ts-ignore
            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                // @ts-ignore
                store.dispatch(sendMessageAC())
            }
            let onNewMessageChange = (body:string) => {
                // @ts-ignore
                store.dispatch(updateNewMessageBodyAC(body))
            }



            return <Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state} />
        }
    }


    </StoreContext.Consumer>


}