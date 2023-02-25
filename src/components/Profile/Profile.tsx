import React from "react";

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../App";


type ProfilePropsType={
    posts:PostType[]
}

export const Profile =(props:ProfilePropsType)=>{

    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>

    )
}