import React from "react";

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/state";



type ProfilePropsType={
    posts:PostType[]
    newPostText:string
    dispatch:(action:ActionsTypes)=>void

}

export const Profile =(props:ProfilePropsType)=>{

    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch} />
        </div>

    )
}