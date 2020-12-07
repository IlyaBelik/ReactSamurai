import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <span>Your message is: {props.message}. Date: {props.date} </span>
        <br/>
        <span>{props.likes} likes</span>
    </div>


}


export default Post