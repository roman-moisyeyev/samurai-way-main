import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css'
import {MyPostPropsType} from "./MyPostsContainer";



export const MyPosts = (props: MyPostPropsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {

        props.addPost()
    }

    const onPostChange = () => {

        // @ts-ignore
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }


    return (

        <div className={classes.descriptionBlock}>
            <h3>MY POSTS</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onPostChange}
                               placeholder='Enter your post'/></div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
               <div>
                </div>


            </div>
            <div className='posts'>
                {postsElements}

            </div>
        </div>

    )
}