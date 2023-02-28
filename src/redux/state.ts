export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

export type  DialogType = {
    name: string
    id: number
}

export  type MessageType = {
    id: number
    message: string
}

export type ProfilePageType ={
    posts:PostType[]
}

export  type DialogPageType ={
    dialogs:DialogType[],
    messages:MessageType[]
}

export type RootStateType ={
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
}

let state = {
    profilePage:{
        posts: [
            {id: 1, message: "Congrat!! Good page!", likeCount: 44},
            {id: 3, message: "Wow!", likeCount: 15},
            // {id: 4, message: "Hello guys!!", likeCount: 25},
            // {id: 5, message: "Yo!", likeCount: 51},
            // {id: 6, message: "Yo,Man!!", likeCount: 8},
            // {id: 7, message: "ABYRVALG!", likeCount: 32},
            // {id:5, message:"Lets GO!", likeCount: 6},
        ]},
    dialogsPage:{
        dialogs:[
            {id:1, name:"Roman"},
            {id:2, name:"Oleg"},
            {id:3, name:"Igor"},
            {id:4, name:"Vitaliy"},
            {id:5, name:"Sergey"},
            {id:6, name:"Aleksandr"},
        ],
        messages:[
            {id:1, message:"hello!"},
            {id:2, message:"how are you?"},
            {id:3, message:"what is happened?"},
            {id:4, message:"Ok,i am understand."},
            {id:5, message:"Lets GO!"},

        ]
    }
}

export let addPost=(postMessage)=>{
    let newPost ={
        id:5,
        message:postMessage,
        likeCount:0
    }
    state.profilePage.posts.push(newPost)
}

export default state