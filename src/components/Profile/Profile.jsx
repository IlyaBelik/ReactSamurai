import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img src="https://img4.goodfon.ru/original/1920x1080/2/81/firewatch-campo-santo-kholmy-vid-les-igra-peizazh-gory-poz-8.jpg" alt=""/>
        </div>
        <div>
            avatar and descr
        </div>
        <MyPosts/>
    </div>
}

export default Profile