import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

type RootReducerType=typeof rootReducer

const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
})



export const store = createStore(rootReducer)