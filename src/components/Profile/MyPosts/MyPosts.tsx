import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css'
import {ActionsTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC(props.newPostText))

        }

    }

    const onPostChange = () => {

        // @ts-ignore
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextAC(text))

    }

    let postsElements = props.posts.map(element => <Post post={element}/>)
    return (


        <div className={classes.descriptionBlock}>
            <h3>MY POSTS</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/></div>
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