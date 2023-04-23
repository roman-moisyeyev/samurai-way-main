import React from "react";
import  styles from './users.module.css'

export const Users = (props: any) => {

    if(props.users.length===0){
        props.setUsers([
            {
                id: 1,
                photoURL:'http://surl.li/gnxbq',
                followed: false,
                fullName: "Roman",
                status: 'I am happy!',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoURL:'http://surl.li/gnxbq',
                followed: true,
                fullName: "Oleg",
                status: 'I am elephant',
                location: {city: 'Bogodukhiv', country: 'Ukraine'}
            },
            {
                id: 3,
                photoURL:'http://surl.li/gnxbq',
                followed: false,
                fullName: "Grisha",
                status: 'I am clever',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },

        ])
    }
    return (
        <div>
            {props.users.map((u: {
                followed: any;
                id: React.Key | null | undefined; photoURL: string | undefined; fullName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; location: { country: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; city: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoURL} className={styles.userPhoto}/>
                </div>
                    <div>
                        {u.followed?
                            <button onClick={()=>{props.follow(u.id)}}>FOLLOW</button>
                            :<button onClick={()=>{props.unFollow(u.id)}}>UNFOLLOW</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}