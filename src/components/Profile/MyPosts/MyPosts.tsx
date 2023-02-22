import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css'


export const MyPosts = () => {
    let postsData = [
        {id: 1, name: "Roman", likeCount: 4},
        {id: 2, name: "Oleg", likeCount: 5},

    ]
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
                <Post id={postsData[0].id} message={postsData[0].name} likeCount={postsData[0].likeCount}/>
                <Post id={postsData[1].id} message={postsData[1].name} likeCount={postsData[1].likeCount}/>

            </div>
        </div>

    )
}