import profileImg from '../../../images/icons/profile.png';
import Header from "./Header";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        generalInfo: state.profilePage.generalInfo,
        profileImg: profileImg,
    }
};

const HeaderContainer = connect(mapStateToProps)(Header);


export default HeaderContainer;