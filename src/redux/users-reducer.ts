

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE='SET-CURRENT-PAGE'
const  SET_TOTAL_USERS_COUNT=' SET-TOTAL-USERS-COUNT'

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
    pageSize:number,
    totalUsersCount:number
    currentPage:number
}

const initialState:InitialStateType = {
    users: [],
    pageSize:50,
    totalUsersCount:0,
    currentPage:1
}

type UnFollowActionType = ReturnType<typeof unFollowAC>
type FollowActionType = ReturnType<typeof followAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export type UsersReducerType=UnFollowActionType | FollowActionType | SetUsersACType|setCurrentPageACType|setTotalUsersCountACType

export const usersReducer = (state:InitialStateType=initialState, action: UsersReducerType):InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}


        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}

        case SET_USERS:{
            return{...state,users:action.users}
        }
        case SET_CURRENT_PAGE:{
            return{...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return{...state,totalUsersCount:action.count}
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
export const setCurrentPageAC = (currentPage:number) => {
    return{type: SET_CURRENT_PAGE, currentPage}as const
}
export const setTotalUsersCountAC = (totalUsersCount:number) => {
    return{type: SET_TOTAL_USERS_COUNT, count:totalUsersCount}as const
}


