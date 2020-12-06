import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.posts}>
            My Posts
            <Post/>
        </div>
}

export default MyPosts