import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {store, StoreType} from "./redux/state";


type AppPropsType = {
    store:StoreType
}


const App = (props:AppPropsType ) => {

    const state=store.getState()
    return (

        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">

                <Route path='/dialogs' render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                              messages={state.dialogsPage.messages}
                                                              newMessageBody={state.dialogsPage.newMessageBody}
                                                              dispatch={props.store.dispatch.bind(store)}
                />}/>
                <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}
                                                              newPostText={state.profilePage.newPostText}
                                                              dispatch={props.store.dispatch.bind(store)}

                />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>

            </div>


        </div>

    );
}


export default App;
