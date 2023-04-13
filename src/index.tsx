import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";



let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>, document.getElementById('root') as HTMLElement);
}

store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireTree()
})
rerenderEntireTree()