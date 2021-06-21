import React from 'react'
import style from '../Style/welcome.module.css'
import {Link} from "react-router-dom";
const Welcome = () => {

    return(   
        <div className={style.WelcomeContainer}>  
            <div className={style.WelcomeInfo}>
                <p>Welcome  to</p>
            </div>
            <div className={style.actionBtn}>
                <Link to="/Map">
                    Get Started
                </Link>
            </div>
        </div>
    ) 
}

export default Welcome
