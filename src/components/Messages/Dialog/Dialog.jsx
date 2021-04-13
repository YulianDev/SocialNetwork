import styles from './dialog.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {addMessageActionCreator, updateMessageTextAreaActionCreator} from "../../../redux/messages-reducer";

function Dialog(props) {
    let dialogs = props.dialogs.map(dialog => <DialogItem name={dialog.name} time={dialog.time} message={dialog.message}/>);

    let messageTextRef = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator("Yuliia", "5:45"));
    }

    let updateMessageTextArea = (e) => {
        let message = e.target.value;
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
                        <textarea className={styles.textarea} value={props.textAreaValue} onChange={updateMessageTextArea}></textarea>
                        <button className={styles.btn} onClick={addMessage} type="button">Send</button>
                    </form>
                </div>

            </div>
    );
};



export default Dialog;