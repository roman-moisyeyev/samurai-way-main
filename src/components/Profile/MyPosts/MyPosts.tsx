import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css'
import {PostType} from "../../../App";


type MyPostsPropsType = {
    posts: PostType[]
}
export const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.posts.map(element => <Post post={element}/>)
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