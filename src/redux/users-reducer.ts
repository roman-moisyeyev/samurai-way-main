const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        {
            id: 1,
            photoURL:'http://surl.li/gnxbq',
            followed: false,
            fullName: "Roman",
            status: 'I am happy!',
            location: {city: 'Kharkiv', country: 'Ukraine'}
        },
        {
            id: 2,
            photoURL:'http://surl.li/gnxbq',
            followed: true,
            fullName: "Oleg",
            status: 'I am elephant',
            location: {city: 'Bogodukhiv', country: 'Ukraine'}
        },
        {
            id: 3,
            photoURL:'http://surl.li/gnxbq',
            followed: false,
            fullName: "Grisha",
            status: 'I am clever',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },

    ],

}


//export type ProfileReducerType=

export const usersReducer = (state = initialState, action: any) => {

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

export const unFollowAC = (userId: number) => ({type: FOLLOW, userId})
export const followAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})


