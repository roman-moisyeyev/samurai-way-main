import {profileReducer, ProfileReducerType} from "./profile-reducer";
import {dialogsReducer, DialogsReducerType} from "./dialogs-reducer";

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
export type ActionsTypes = ProfileReducerType | DialogsReducerType


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

    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },

    dispatch(action: any) {
        this._state.profilePage= profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}




