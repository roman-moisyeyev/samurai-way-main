import React  from "react";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/dialogs-reducer";



type MapStatePropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}

export type DialogsPropsType= MapStatePropsType&MapDispatchPropsType

const mapStateToProps=(state:AppStateType):MapStatePropsType=>{
    return{
        dialogsPage:state.dialogsPage
    }
}
const mapDispatchToProps=(dispatch:Dispatch):MapDispatchPropsType=>{
    return{
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyAC(body))},
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
