import icon from '../../../../assets/images/icons/profile.png';
import styles from './postItem.module.scss';
function PostItem(props) {
    return (
        <div className={styles.item}>
            <div className={styles.author}>
                <img className={styles.img} src={icon}></img>
            </div>
            <p className={styles.message}>{props.message}</p>
        </div>
    )
};

export default PostItem;