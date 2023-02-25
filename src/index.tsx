import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let posts = [
    {id: 1, message: "Congrat!! Good page!", likeCount: 44},
    {id: 3, message: "Wow!", likeCount: 15},
    {id: 4, message: "Hello guys!!", likeCount: 25},
    {id: 5, message: "Yo!", likeCount: 51},
    {id: 6, message: "Yo,Man!!", likeCount: 8},
    {id: 7, message: "ABYRVALG!", likeCount: 32},
    {id:5, message:"Lets GO!", likeCount: 6},

]

let dialogs = [
    {id:1, name:"Roman"},
    {id:2, name:"Oleg"},
    {id:3, name:"Igor"},
    {id:4, name:"Vitaliy"},
    {id:5, name:"Sergey"},
    {id:6, name:"Aleksandr"},
]
let messages = [
    {id:1, message:"hello!"},
    {id:2, message:"how are you?"},
    {id:3, message:"what is happened?"},
    {id:4, message:"Ok,i am understand."},
    {id:5, message:"Lets GO!"},

]

ReactDOM.render(
    <App  dialogs={dialogs} messages={messages} posts={posts}/>,
    document.getElementById('root')
);