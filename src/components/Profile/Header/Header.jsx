import styles from "./header.module.scss";
import searchIcon from "../../../assets/images/icons/job-search.png"
import jobIcon from "../../../assets/images/icons/job.png"

function Header(props) {
    let contacts = [];
    for (let soc in props.profileInfo.contacts) {
        if (props.profileInfo.contacts[soc]) {
            contacts.push(<li className={styles.socialItem}>
                <p className="{styles.socialName}">{soc}</p>
                <p className="{styles.socialUrl}">{props.profileInfo.contacts[soc]}</p>
            </li>)
        }
    }


    return (
        <div className={styles.header}>
            <div className={styles.photo}>
                <img className={styles.img} src={props.profileInfo.photos.large}></img>
            </div>
            <div className="header_info">
                <div className={styles.fullname}>
                    <p className={styles.name}>{props.profileInfo.fullName}</p>
                </div>
                <p className={styles.about}>{props.profileInfo.aboutMe}</p>
                <div className={styles.job}>
                    <p className="search">Job status</p>
                    <div className={"searchStatus"}>
                        {props.profileInfo.lookingForAJob ? <img src={searchIcon} alt="Job searching"/> : <img src={jobIcon} alt="Job"/>}
                    </div>
                    <p className="jobDescr">{props.profileInfo.lookingForAJobDescription}</p>
                </div>
                <ul className={styles.social}>
                    {
                        contacts
                    }
                </ul>
            </div>
        </div>
    )
};


{/*<div className={styles.photo}>
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
            </div>*/}


export default Header;