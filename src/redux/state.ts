export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

export type  DialogType = {
    name: string
    id: number
}

export  type MessageType = {
    id: number
    message: string

}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string

}


export  type DialogPageType = {
    dialogs: DialogType[],
    messages: MessageType[]
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType

}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (callback: (state: RootStateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = AddPostActionType | UpgradeNewPostTextType|SendMessageType|updateNewMessageBodyType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpgradeNewPostTextType = ReturnType<typeof updateNewPostTextAC>
type SendMessageType = ReturnType<typeof sendMessageAC>
type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const addPostAC = (newPostText: string) => {
    return {type: "ADD-POST", newPostText} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {type:'UPDATE-NEW-POST-TEXT',text:text} as const
}
export const sendMessageAC = () => {
    return { type:"SEND-MESSAGE"} as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {type:"UPDATE-NEW-MESSAGE-BODY",body:body} as const
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Congrats!! Good page!", likeCount: 44},
                {id: 2, message: "It\'s!! Good page!", likeCount: 23},

            ],
            newPostText: ''

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Roman"},
                {id: 2, name: "Oleg"},
                {id: 3, name: "Igor"},
                {id: 4, name: "Vitaliy"},
                {id: 5, name: "Sergey"},
                {id: 6, name: "Aleksandr"},
            ],
            messages: [
                {id: 1, message: "hello!"},
                {id: 2, message: "how are you?"},

            ],
            newMessageBody: ''
        }
    },

    getState() {return this._state},
    _callSubscriber() {console.log('state was changed')},
    subscribe(callback) {this._callSubscriber = callback},

    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost: { id: number, message: string, likeCount: number } = {
                id: new Date().getTime(),
                message: action.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)


        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}




