import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {


    let posts = props.posts.map(p => <Post message={p.message} date={p.date} likes={p.likes}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        // debugger
        props.addPost()
    };

    let onPostChanged = () => {
        // debugger
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChanged}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts