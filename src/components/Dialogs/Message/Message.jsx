import s from "./../Dialogs.module.css"

const Message = (props) => {
    if (props.isMy) return <div className={`${s.message} ${s.messageIsMy}`}>
        { props.messageText }
        <img src="https://sun4-15.userapi.com/s/v1/ig2/BwZ2HF6jd-U68eUpEtTMgunRt7ojP_icljSPPo_c1OXM7x7jDdqZ6QAnEm-jOPRiV4cI2U3EE_haGE8JP__LCPY1.jpg?size=50x50&quality=95&crop=167,393,1121,1121&ava=1"/>
    </div>
    else return <div className={`${s.message} ${s.messageNotMy}`}>
        <img src="https://sun4-16.userapi.com/s/v1/if2/0VB3ZJsRu56M7FVoRCwX8WfwiV-6pMBLBWgadKoQ0PB7XkrsuJspBvfqg9Cr-CecMILBdpCiV01Yj8pEFccc7PCb.jpg?size=50x50&quality=96&crop=122,105,1296,1296&ava=1"/>
        { props.messageText }
    </div>
}



export default Message