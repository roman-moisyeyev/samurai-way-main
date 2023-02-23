import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css'


export const MyPosts = () => {
    let posts = [
        {id: 1, message: "Congrat!! Good page!", likeCount: 44},
        {id: 2, message: " Good day!", likeCount: 144},
        {id: 3, message: "Wow!", likeCount: 15},
        {id: 4, message: "Hello guys!!", likeCount: 25},
        {id: 5, message: "Yo!", likeCount: 51},

    ]

    let postsElements = posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
    return (

        <div className={classes.descriptionBlock}>
            <h3>MY POSTS</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>add post</button>
                </div>
                <div>
                    <button>remove</button>
                </div>


            </div>
            <div className='posts'>
                {postsElements}

            </div>
        </div>

    )
}