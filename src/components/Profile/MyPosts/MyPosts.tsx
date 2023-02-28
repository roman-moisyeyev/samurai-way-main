import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css'
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement= React.createRef()

    const addPost = () => {
       let text=newPostElement.current.value
       props.addPost(text)
    }

    let postsElements = props.posts.map(element => <Post post={element}/>)
    return (


        <div className={classes.descriptionBlock}>
            <h3>MY POSTS</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>add post</button>
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