import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/users.png'
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component<any, any> {

    constructor(props: UsersPropsType) {//конструктор можно не писать
        super(props);
    }

    componentDidMount() {


        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)//
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            });
    }

    render() {
        // @ts-ignore

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        // @ts-ignore
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (<div>
                <div>

                    {pages.map(p => {
                        // @ts-ignore
                        return <span className={this.props.currentPage === p && styles.selectedPage}
                                     onClick={(e) => {
                                         this.onPageChanged(p)
                                     }}> {p} </span>
                    })}
                </div>

                {this.props.usersPage.users.map((u: { id: React.Key | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                    <div key={u.id}>
                <span>
                    <div>< img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                               alt="user photo"/></div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { // @ts-ignore
                                this.props.follow(u.id)
                            }}>FOLLOW</button>
                            : <button onClick={() => { // @ts-ignore
                                this.props.unFollow(u.id)
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

}


export default Users