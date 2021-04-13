import styles from './navbar.module.scss';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="menu">
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='/profile' activeClassName={styles.active}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='/friends'activeClassName={styles.active}>Friends</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='messages'activeClassName={styles.active}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='settings'activeClassName={styles.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;