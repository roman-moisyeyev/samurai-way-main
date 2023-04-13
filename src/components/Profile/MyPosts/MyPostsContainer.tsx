import React from "react";
import {ActionsTypes, PostType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {store} from "../../../redux/redux-store";
import {text} from "stream/consumers";
import StoreContext from "../../../StoreContext";


type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    // @ts-ignore
    return (
        <StoreContext.Consumer>
            {
            (store)=> {
                // @ts-ignore
                let state = store.getState()
                const addPost = (text: string) => {
                    // @ts-ignore
                    store.dispatch(addPostAC())
                }

                const onPostChange = (text: string) => {
                   // @ts-ignore
                    store.dispatch(updateNewPostTextAC(text))
                }

                // @ts-ignore
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost} posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }

        </StoreContext.Consumer>

    )
}