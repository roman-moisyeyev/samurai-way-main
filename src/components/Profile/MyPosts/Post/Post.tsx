import React from "react";
import classes from './Post.module.css'
import {PostType} from "../../../../redux/profile-reducer";


export const Post = (props:PostType) => {

    return (
        <div>
            <div className={classes.item} key={props.id}>
                <img
                    src='http://surl.li/goegx'
                    alt="avatar logo"/>
            </div>
            <div>{props.message}</div>
            <div>{` like:${props.likeCount}`}</div>
        </div>


    )
}