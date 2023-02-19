import React from "react";
import {Post} from "./Post/Post";

export const MyPosts =()=>{

    return(

            <div>
                MY POSTS
                <div>
                    <textarea ></textarea>
                    <button>add post</button>
                    <button>remove</button>
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