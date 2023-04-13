import {DialogPageType} from "./store";





const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


type SendMessageType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>
export type  DialogsReducerType= SendMessageType|UpdateNewMessageBodyType


let initialState = {dialogs: [{id: 1, name: "Roman"}, {id: 2, name: "Oleg"}, {id: 3, name: "Igor"},
        {id: 4, name: "Vitaliy"},
        {id: 5, name: "Sergey"},
        {id: 6, name: "Aleksandr"},],
    messages: [
        {id: 1, message: "hello!"},
        {id: 2, message: "how are you?"},

    ],
    newMessageBody: ''
}

export const dialogsReducer = (state=initialState, action: DialogsReducerType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state
    }

}

export const sendMessageAC = () => {
    return {type: "SEND-MESSAGE"} as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-BODY", body: body} as const
}