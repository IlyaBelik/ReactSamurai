import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return(
        <div>
            <div className={s.avatar}>
                <img src="https://img4.goodfon.ru/original/1920x1080/2/81/firewatch-campo-santo-kholmy-vid-les-igra-peizazh-gory-poz-8.jpg" alt=""/>
            </div>
            <div className={s.descr}>
                <span>lala</span>
            </div>
        </div>
    )
}

export default ProfileInfo