import styles from "./infoItem.module.scss";


function InfoItem(props) {
    let section = props.section;
    let data = props.data;
    return (
        <li className={styles.item}>
            <div className={styles.section}>{`${section}:`}</div>
            <div className="infoItem_result">{`${data}`}</div>
        </li>
    );
}

export default InfoItem;