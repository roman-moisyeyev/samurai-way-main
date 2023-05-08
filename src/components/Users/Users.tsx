import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.png";
import {UserType} from "../../redux/users-reducer";


type UsersPropsType={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(pageNumber: number) =>void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: Array<UserType>
}
let Users =(props:UsersPropsType)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return(
        <div>
            <div>

                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}
            </div>

            {props.users.map((u: { id: React.Key | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                <div key={u.id}>
                <span>
                    <div>< img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                               alt="user photo"/></div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { // @ts-ignore
                                props.follow(u.id)
                            }}>FOLLOW</button>
                            : <button onClick={() => { // @ts-ignore
                                props.unFollow(u.id)
                            }}>UNFOLLOW</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

export default Users