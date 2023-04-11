import './index.css';
import state, {addPost, RootStateType, subscribe, updateNewPostText} from "./redux/state";

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root') as HTMLElement);
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)