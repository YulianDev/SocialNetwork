import {NavLink} from "react-router-dom";
import styles from "./membersItem.module.scss";
import img from "../../../../images/icons/avater.png";


function MembersItem(props) {
    let pathTo = props.to;
    let name = props.name;
    let date = props.date;

    return (
        <li className="item">
            <NavLink className={styles.link} to={`/messages/${pathTo}`} activeClassName={styles.active}>
                <img className={styles.img} src={img} alt="avatar"/>
                <p className="name">{name}</p>
                <div className="date">{date}</div>
            </NavLink>
        </li>
    );
};

export default MembersItem;