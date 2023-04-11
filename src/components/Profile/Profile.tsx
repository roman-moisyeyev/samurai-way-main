import React from "react";

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";



type ProfilePropsType={
    posts:PostType[]
    newPostText:string
    addPost:(postMessage:string )=>void
    updateNewPostText:(newPost:string)=>void

}

export const Profile =(props:ProfilePropsType)=>{

    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>

    )
}