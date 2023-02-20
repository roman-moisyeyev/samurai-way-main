import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css'


export const MyPosts =()=>{

    return(

            <div className={classes.descriptionBlock}>
                <h3>MY POSTS</h3>
                <div>
                    <div><textarea ></textarea></div>
                    <div><button>add post</button></div>
                    <div> <button>remove</button></div>


                </div>
                <div className='posts'>
                   <Post message={'Hi, how are you?'} likeCount={4}/>
                   <Post message={'What are you doing?'} likeCount={3}/>
                   <Post message={'Call to me,please!'} likeCount={5}/>
                   <Post message={'Hmm... :( '} likeCount={2}/>
                </div>
            </div>

    )
}