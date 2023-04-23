import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let mapStateToProps=(state:any)=>{
    return {
        users:state.usersPage.users
    }
}

let mapDispatchToProps=(dispatch:any)=>{
    return{
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:any)=>{
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)