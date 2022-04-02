import preloader from "../../../assets/preloader.svg";
import s from './Preloader.module.css'
import React from "react";


let Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloader}/>
    </div>
}

export default Preloader