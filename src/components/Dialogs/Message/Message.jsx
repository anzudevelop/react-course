import s from "./../Dialogs.module.css"

const Message = (props) => {
    if (props.isMy) return <div className={`${s.message} ${s.messageIsMy}`}>
        { props.messageText }
        <img src="https://yt3.ggpht.com/ytc/AAUvwnh9__YmGKU7uNxBjeuX4BKtqWI6UloiLYq8yGOF=s900-c-k-c0x00ffffff-no-rj"/>
    </div>
    else return <div className={`${s.message} ${s.messageNotMy}`}>
        <img src="https://yt3.ggpht.com/ytc/AAUvwnh9__YmGKU7uNxBjeuX4BKtqWI6UloiLYq8yGOF=s900-c-k-c0x00ffffff-no-rj"/>
        { props.messageText }
    </div>
}



export default Message