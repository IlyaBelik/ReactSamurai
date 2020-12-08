import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
// debugger

    let posts = props.posts.map(p => <Post message={p.message} date={p.date} likes={p.likes}/>
    )

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea>Put your text here!</textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts