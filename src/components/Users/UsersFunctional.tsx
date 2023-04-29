import React from "react";
import  styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import userPhoto from '../../assets/images/users.png'
import { UserType } from "../../redux/users-reducer";

import axios from "axios";

export const UsersFunctional = (props: UsersPropsType) => {
let getUsers=()=>{
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: { data: { items: UserType[]; }; })=>{
            props.setUsers(response.data.items)})
    }
}

    return (

        <div>

            <button onClick={getUsers}>get users</button>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>< img src={u.photos.small !=null ? u.photos.small :userPhoto} className={styles.userPhoto}  alt="user photo"/></div>
                    <div>
                        {u.followed?
                            <button onClick={()=>{props.follow(u.id)}}>FOLLOW</button>
                            :<button onClick={()=>{props.unFollow(u.id)}}>UNFOLLOW</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
}