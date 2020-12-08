import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogData = props.state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesData = props.state.messages.map(m => <Message message={m.messageText}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogData}
            </div>
            <div className={s.messages}>
                {messagesData}
            </div>
        </div>
    )
}

export default Dialogs