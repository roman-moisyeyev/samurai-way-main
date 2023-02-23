import React from "react";
import classes from './Post.module.css'



type PostPropsType={
    message:string
    likeCount:number
}

export const Post = (props:PostPropsType) => {

    return (
        <div>
            <div className={classes.item}>
                <img
                    src="https://media.gettyimages.com/id/1227618801/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=2048x2048&w=gi&k=20&c=a8O0jXGeYVFI9TCguB1f-7sFDsinMVJnoEpbEg4yhvY="
                    alt="avatar logo"/>
                {props.message}
            </div>
            <div>{` like:${props.likeCount}`}</div>
        </div>


    )
}