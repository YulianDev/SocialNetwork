import styles from './messages.module.scss';
import MembersContainer from "./Members/MembersContainer";
import DialogContainer from "./Dialog/DialogContainer";

function Messages() {
    return (
        <div className={styles.inner}>
            <div className={styles.members}>
                <MembersContainer />
            </div>
            <div className={styles.dialog}>
                <DialogContainer />
            </div>
        </div>
    );
};

export  default Messages;