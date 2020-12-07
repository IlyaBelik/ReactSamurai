import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.posts}>
        My Posts
        <Post message='Hello' date='07.12.2020' likes='54'/>
        <Post message='Здарова' date='07.12.2020' likes='27'/>
    </div>
}

export default MyPosts