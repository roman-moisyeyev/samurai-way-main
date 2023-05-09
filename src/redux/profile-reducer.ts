const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE='SET-USER-PROFILE'


export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile:null
}
type AddPostActionType = ReturnType<typeof addPostAC>
type UpgradeNewPostTextType = ReturnType<typeof updateNewPostTextAC>
type setUserProfileType = ReturnType<typeof setUserProfile>

export type ProfileReducerType = AddPostActionType | UpgradeNewPostTextType|setUserProfileType

let initialState = {
    posts: [
        {id: 1, message: "Congrats!! Good page!", likeCount: 44},
        {id: 2, message: "It\'s!! Good page!", likeCount: 23}
    ],
    newPostText: '',
    profile:null
}

export const profileReducer = (state:InitialStateType = initialState, action: ProfileReducerType):InitialStateType => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
            id: new Date().getTime(),
            message:state.newPostText,
            likeCount: 0
        }
            return {...state,posts:[...state.posts,newPost],newPostText:''}
        }

        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }

}

export const addPostAC = (newPostText: string) => {
    return {type: 'ADD-POST', newPostText} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
}
export const setUserProfile = (profile:any) => {
    return {type: SET_USER_PROFILE, profile} as const
}