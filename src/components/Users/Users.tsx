import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/users.png'
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component {

    constructor(props: UsersPropsType) {//конструктор можно не писать
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: { data: { items: UserType[]; }; }) => {
            // @ts-ignore
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        // @ts-ignore

        return (
            <div>
                {this.props.usersPage.users.map(u => <div key={u.id}>
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