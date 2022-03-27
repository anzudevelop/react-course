import s from './Users.module.css'

let Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {id:1, fullName:"Дмитрий", status:"Hello everybody", location:{city: 'Tomsk', country: 'Russia'}, followed: true, profileImg: 'https://i.pinimg.com/originals/fc/67/03/fc6703e79d41363832817cbdf297beaa.jpg'},
            {id:2, fullName:"Василий", status:"I'm a boss", location:{city: 'Moscow', country: 'Russia'}, followed: false, profileImg: 'https://i.pinimg.com/originals/fc/67/03/fc6703e79d41363832817cbdf297beaa.jpg'},
            {id:3, fullName:"Даниил", status:"What's up?", location:{city: 'Kiev', country: 'Ukraine'}, followed: true, profileImg: 'https://i.pinimg.com/originals/fc/67/03/fc6703e79d41363832817cbdf297beaa.jpg'},
            {id:4, fullName:"Влад", status:"I'm a pussy boy", location:{city: 'New York', country: 'Pendostan'}, followed: false, profileImg: 'https://sun4-17.userapi.com/s/v1/if1/bA3QsuT2Juzg8JBiNX-2hbDH6Za05oQyoAQF6hwJ1KKV3-qf92ODp415Lom3s76RGr7xGjg0.jpg?size=200x200&quality=96&crop=298,3,2045,2045&ava=1'},
        ])
    }

    return (
        <div>
            <b>Users</b>
            {props.users.map(u => <div key={u.id} className={s.item}>
                <span>
                    <div className={s.profilePhoto}><img src={u.profileImg} alt=""/></div>
                    <div><button onClick={() => {props.followUnfollow(u.id)}}>{u.followed ? 'Отписаться' : 'Подписаться'}</button></div>
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

export default Users