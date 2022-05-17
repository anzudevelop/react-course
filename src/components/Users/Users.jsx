import s from './Users.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)    //Рассчитали кол-во страниц, округлили в большую сторону

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let followUnfolloFun = () => {

    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : s.noneSelectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p} </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.item}>
                <span>
                    <div className={s.profilePhoto}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'} alt=""/>
                        </NavLink>
                    </div>
                    <div><button onClick={() => {
                        usersAPI.followUnfollow(u.followed, u.id).then(response => {
                            if (response.data.resultCode == 0) {
                                props.followUnfollow(u.id)
                            }
                        })

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
                </div>)
            }
        </div>
    )
}

export default Users