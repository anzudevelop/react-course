import s from './Users.module.css'
import * as axios from "axios";
import React from 'react'

class Users extends React.Component {

    componentDidMount() {   //Здась надо делать все side эффекты
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)    //Рассчитали кол-во страниц, округлили в большую сторону

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : s.noneSelectedPage}
                                     onClick={(e) => {this.onPageChanged(p)}}>{p} </span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id} className={s.item}>
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
                    </div>)
                }
            </div>
        )
    }
}

export default Users