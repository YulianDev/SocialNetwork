import styles from "./dialogItem.module.scss";
import interlocutorImg from "../../../../images/icons/avater.png";

function DialogItem(props) {
    let name = props.name;
    let time = props.time;
    let message = props.message;
    return (
        <div className={styles.item}>
            <img className={styles.img} src={interlocutorImg} alt="avatar"/>
            <div className={styles.itemMessage}>
                <div className={styles.itemHeader}>
                    <p className="dialog_name">{name}</p>
                    <div className={styles.time}>{`${time} PM`}</div>
                </div>
                <div className="dialog_message">
                    {message}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;