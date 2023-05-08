


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


type SendMessageType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>
export type  DialogsReducerType= SendMessageType|UpdateNewMessageBodyType

export type DialogType={
    id:number
    name:string
}
export type MessageType={
    id:number
    message:string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Roman"}, {id: 2, name: "Oleg"}, {id: 3, name: "Igor"},
        {id: 4, name: "Vitaliy"},
        {id: 5, name: "Sergey"},
        {id: 6, name: "Aleksandr"},]as Array <DialogType>,
    messages: [
        {id: 1, message: "hello!"},
        {id: 2, message: "how are you?"},

    ] as Array <MessageType>,
    newMessageBody: ''
}

export type InitialStateType=typeof initialState

export const dialogsReducer = (state:InitialStateType=initialState, action: DialogsReducerType):InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body=state.newMessageBody




            return {...state,newMessageBody:'',
                messages: [...state.messages,{id:6,message:body}]
            }


        case UPDATE_NEW_MESSAGE_BODY:
           return{...state,newMessageBody:action.body
           }

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


//delay(1000).then(() => console.log(‘resolve’)