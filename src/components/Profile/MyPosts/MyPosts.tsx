import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css'
import {ActionsTypes,PostType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";




type MyPostsPropsType = {
    posts: PostType[]
    newPostText:string
    updateNewPostText:(text:string)=>void
    addPost:()=>void
    //dispatch:(action:ActionsTypes)=>void
}



export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement= React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
            props.addPost()
    }

    const onPostChange=()=>{

        // @ts-ignore
        let text= newPostElement.current.value
        props.updateNewPostText(text)

    }

    let postsElements = props.posts.map(element => <Post post={element}/>)
    return (


        <div className={classes.descriptionBlock}>
            <h3>MY POSTS</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}
                               placeholder='Enter your post'/></div>
                <div>
                    <button onClick={onAddPost}>add post</button>
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