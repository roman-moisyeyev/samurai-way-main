import React, {ChangeEvent} from "react";
import {Dialogs} from "../Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";


// type DialogsPropsType = {
//     store:StoreType
// }



let mapStateToProps=(state:any)=>{
    return{
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps=(dispatch:any)=>{
    return{
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyAC(body))},
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }
    }
}

// @ts-ignore
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
