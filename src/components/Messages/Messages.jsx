import styles from './messages.module.scss';
import Dialog from "./Dialog/Dialog";
import Members from "./Members/Members";

function Messages(props) {
    return (
        <div className={styles.inner}>
            <div className={styles.members}>
                <Members members={props.state.members}/>
            </div>
            <div className={styles.dialog}>
                <Dialog dialogs={props.state.dialogs} textAreaValue={props.state.messageTextAreaValue} dispatch={props.dispatch}/>
            </div>
        </div>
    );
};

export  default Messages;