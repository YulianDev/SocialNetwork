import styles from './dialog.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {addMessageActionCreator, updateMessageTextAreaActionCreator} from "../../../redux/store";

function Dialog(props) {
    let dialogs = props.dialogs.map(dialog => <DialogItem name={dialog.name} time={dialog.time} message={dialog.message}/>);

    let messageTextRef = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateMessageTextArea = () => {
        let message = messageTextRef.current.value;
        props.dispatch(updateMessageTextAreaActionCreator(message));
    }

    return (
            <div className={styles.dialog}>
                <div className={styles.header}>
                    <h4 className={styles.name}>Yuliia</h4>
                </div>
                <div className={styles.dialogList}>
                    {
                        dialogs
                    }
                </div>
                <div className="dialogForm">
                    <form className="form">
                        <textarea className={styles.textarea} ref={messageTextRef} value={props.textAreaValue} onChange={updateMessageTextArea}></textarea>
                        <button className={styles.btn} onClick={addMessage} type="button">Send</button>
                    </form>
                </div>

            </div>
    );
};



export default Dialog;