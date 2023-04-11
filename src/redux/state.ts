let rerenderEntireTree= (state:RootStateType)=>{
    console.log('state was changed')
}

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
    posts:PostType[],
    newPostText:string

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
            {id: 1, message: "Congrats!! Good page!", likeCount: 44},
            {id: 2, message: "It\'s!! Good page!", likeCount: 23},
            {id: 3, message: "Wow!", likeCount: 15},

        ],
        newPostText:''

    },
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

export const addPost=(postMessage:string)=>{

    let newPost:{id: number, message: string, likeCount: number } ={
        id:new Date().getTime(),
        message:state.profilePage.newPostText,
        likeCount:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''

    rerenderEntireTree(state)
}

export const updateNewPostText = (newText:string)=>{
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}

export const subscribe = (observer:any)=>{
    rerenderEntireTree=observer
}

export default state