import styles from './dialog.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

function Dialog(props) {
    let dialogs = props.dialogList.map(dialog => <DialogItem name={dialog.name} time={dialog.time} message={dialog.message}/>);


    let onAddMessage = () => {
        props.addMessage("Yuliia", "5:45");
    }

    let onUpdateMessageTextArea = (e) => {
        let message = e.target.value;
        props.updateTextArea(message);
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
                        <textarea className={styles.textarea} value={props.textAreaValue} onChange={onUpdateMessageTextArea}></textarea>
                        <button className={styles.btn} onClick={onAddMessage} type="button">Send</button>
                    </form>
                </div>

            </div>
    );
};



export default Dialog;