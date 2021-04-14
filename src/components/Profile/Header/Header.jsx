import styles from './header.module.scss';
import InfoItem from "./InfoItem/InfoItem";

function Header(props) {

    let generalInfo = props.generalInfo.map(info => <InfoItem section={info.section} data={info.data}/>);

    return (
        <div className={styles.header}>
            <div className={styles.photo}>
                <img className={styles.img} src={props.profileImg}></img>
            </div>
            <div className="header_info">
                <div className={styles.fullname}>
                    <p className={styles.name}>Yulian</p>
                    <p className={styles.secondname}>Koval</p>
                </div>
                <ul className="header_info-list">
                    {generalInfo}
                </ul>
            </div>
        </div>
    )
};


export default Header;