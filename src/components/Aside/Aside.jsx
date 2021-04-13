import Navbar from "./Navbar/Navbar";
import styles from "./aside.module.scss";


function Aside() {
    return (
        <aside className={styles.aside}>
            <Navbar />
        </aside>
    );
};

export default Aside;