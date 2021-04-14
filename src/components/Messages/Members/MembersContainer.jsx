import Members from "./Members";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        membersList: state.messagePage.members,
    }
}

const MembersContainer = connect(mapStateToProps)(Members)

export default MembersContainer;