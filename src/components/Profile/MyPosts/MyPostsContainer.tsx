import React from "react";
import {ActionsTypes, PostType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {store} from "../../../redux/redux-store";
import {text} from "stream/consumers";


type MyPostsPropsType = {
   store:StoreType
}


export const MyPostsContainer = (props: MyPostsPropsType) => {
    let state=store.getState()

    const addPost = (text:string) => {
            // @ts-ignore
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))

    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost} posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            />
    )
}