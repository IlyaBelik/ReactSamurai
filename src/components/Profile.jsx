import React from 'react'
import s from '../styles/Profile.module.css'

const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img src="https://img4.goodfon.ru/original/1920x1080/2/81/firewatch-campo-santo-kholmy-vid-les-igra-peizazh-gory-poz-8.jpg" alt=""/>
        </div>
        <div>
            avatar and descr
        </div>
        <div className={s.posts}>
            My Posts
            <div>
                New Post
            </div>
            <div className={s.item}>
                Post 1
            </div>
        </div>
    </div>
}

export default Profile