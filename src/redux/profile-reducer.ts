import {ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type AddPostActionType = ReturnType<typeof addPostAC>
type UpgradeNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export type ProfileReducerType=AddPostActionType | UpgradeNewPostTextType

export const profileReducer= (state:ProfilePageType,action:ProfileReducerType)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost: { id: number, message: string, likeCount: number } = {
                id: new Date().getTime(),
                message: action.newPostText,
                likeCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state;
        default: return  state
    }

}

export const addPostAC = (newPostText: string) => {
    return {type: "ADD-POST", newPostText} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', text: text} as const
}