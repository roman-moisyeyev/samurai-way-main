import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/1store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile =()=>{

    return(
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    )
}