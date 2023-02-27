import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";
import {Dialogs} from "./components/Dialogs/Dialogs";


type AppPropsType={
state:RootStateType
}


    const App = (props:AppPropsType) =>{
    return (

            <div className="app-wrapper">

                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>


            </div>

    );
}


export default App;
