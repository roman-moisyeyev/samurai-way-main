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

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string

}

export  type DialogPageType = {
    dialogs: DialogType[],
    messages: MessageType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType

}

export type StoreType={
    _state:RootStateType
    getState:()=>RootStateType
    _callSubscriber: (_state: RootStateType)=>void
    subscribe: (callback: (state: RootStateType) => void)=>void
    dispatch:(action:ActionsTypes)=>void
}
export type ActionsTypes=AddPostActionType | UpgradeNewPostTextType

type AddPostActionType=ReturnType<typeof addPostAC>
type UpgradeNewPostTextType=ReturnType<typeof updateNewPostTextAC>



//const ADD_POST='ADD-POST'
//const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'

export const addPostAC = (newPostText:string)=>{
   return {type: "ADD-POST", newPostText}as const
}
export const updateNewPostTextAC = (text:string)=>{
    return {type: "UPDADE-NEW-POST-TEXT",newText: text } as const
}

export const store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Congrats!! Good page!", likeCount: 44},
                {id: 2, message: "It\'s!! Good page!", likeCount: 23},
                {id: 3, message: "Wow!", likeCount: 15},

            ],
            newPostText: ''

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Roman"},
                {id: 2, name: "Oleg"},
                {id: 3, name: "Igor"},
                {id: 4, name: "Vitaliy"},
                {id: 5, name: "Sergey"},
                {id: 6, name: "Aleksandr"},
            ],
            messages: [
                {id: 1, message: "hello!"},
                {id: 2, message: "how are you?"},
                {id: 3, message: "what is happened?"},
                {id: 4, message: "Ok,i am understand."},
                {id: 5, message: "Lets GO!"},

            ]
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('state was changed')
    },

    subscribe  (callback) {
        // @ts-ignore
        this._callSubscriber = callback},


   // addPost(postMessage: string) {},
   // updateNewPostText(newText: string) {},

    dispatch(action:any){
      if(action.type==='ADD-POST'){
          let newPost: { id: number, message: string, likeCount: number } = {
              id: new Date().getTime(),
              message: action.newPostText,
              likeCount: 0
          }
          this._state.profilePage.posts.push(newPost)
          this._state.profilePage.newPostText = ''

          this._callSubscriber(this._state)
      }
      else if (action.type==='UPDADE-NEW-POST-TEXT'){
          this._state.profilePage.newPostText = action.newText
          this._callSubscriber(this._state)
      }
    }
}




