import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.friendItem}>
            <div>
                <img src={ props.img } alt=""/>
            </div>
            <div>
                { props.name }
            </div>
        </div>
    );
}

export default Friend