import s from './Users.module.css'
import * as axios from "axios";
import React from 'react'

class Users extends React.Component {

    constructor(props) {    //Вызвается единожды при создании и парсит данные с сервера
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                <b>Users</b>
                {this.props.users.map(u => <div key={u.id} className={s.item}>
                <span>
                    <div className={s.profilePhoto}><img
                        src={u.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'}
                        alt=""/></div>
                    <div><button onClick={() => {
                        this.props.followUnfollow(u.id)
                    }}>{u.followed ? 'Отписаться' : 'Подписаться'}</button></div>
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
                </div>)}
            </div>
        )
    }
}

export default Users