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
                   <Post/>
                   <Post/>
                   <Post/>
                   <Post/>
                </div>
            </div>

    )
}