import styles from './members.module.scss';
import MembersItem from "./MembersItem/MembersItem";

function Members(props) {
    let members = props.members.map(member => <MembersItem to={member.id} name={member.name} date={member.date}/>)
    return (
        <div className="members">
            <div className={styles.header}>
                <h4 className={styles.headerTitle}>Messaging</h4>
            </div>
            <ul className="list">
                {
                    members
                }
            </ul>
        </div>
    );
};

export default Members;