

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType={
    id:number,
    name:string
    photos:UserPhoto,
    followed:boolean,
    status:string,
    //location:UsersLocation
}

 type UserPhoto={
    small:string
     large:string
 }
type UsersLocation={
    city:string
    country:string
}

export type InitialStateType={
    users:Array<UserType>
}

const initialState:InitialStateType = {
    users: []
}

type UnFollowActionType = ReturnType<typeof unFollowAC>
type FollowActionType = ReturnType<typeof followAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
export type UsersReducerType=UnFollowActionType | FollowActionType | SetUsersACType

export const usersReducer = (state:InitialStateType=initialState, action: UsersReducerType):InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}


        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case SET_USERS:{
            return{...state,users:[...state.users,...action.users]}
        }
        default:
            return state
    }

}

export const unFollowAC = (userId: number) => {
    return{type: FOLLOW, userId}as const
}
export const followAC = (userId: number) => {
    return{type: UNFOLLOW, userId}as const
}
export const setUsersAC = (users: UserType[]) => {
    return{type: SET_USERS, users}as const
}


