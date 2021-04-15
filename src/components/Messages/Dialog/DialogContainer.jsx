import Dialog from "./Dialog";
import {addMessageActionCreator, updateMessageTextAreaActionCreator} from "../../../redux/messages-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogList: state.messagePage.dialogs,
        textAreaValue: state.messagePage.messageTextAreaValue,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (name, time) =>  dispatch(addMessageActionCreator(name, time)),
        updateTextArea: (message) => dispatch(updateMessageTextAreaActionCreator(message)),
    }
}


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);


export default DialogContainer;