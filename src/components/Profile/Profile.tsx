import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile =()=>{

    return(
        <div className={classes.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/09/11/08/48/banner-935470_960_720.jpg"
                     alt="logo main content"/>
            </div>
            <div>avatar+description</div>
            <MyPosts/>
        </div>

    )
}