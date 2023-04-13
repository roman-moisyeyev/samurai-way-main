import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import StoreContext, {Provider} from "./StoreContext";



let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
       <Provider store={store}>
           <App />
       </Provider>



        </BrowserRouter>, document.getElementById('root') as HTMLElement);
}

store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireTree()
})
rerenderEntireTree()