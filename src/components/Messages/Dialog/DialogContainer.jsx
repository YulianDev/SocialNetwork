import Dialog from "./Dialog";
import {addMessageActionCreator, updateMessageTextAreaActionCreator} from "../../../redux/messages-reducer";
import {connect} from "react-redux";

/*function DialogContainer(props) {
    const state = props.store.getState().messagePage;

    const addMessage = (name, time) => props.store.dispatch(addMessageActionCreator(name, time));

    const updateTextArea = (message) => {
        props.store.dispatch(updateMessageTextAreaActionCreator(message));
    }



    return (
            <Dialog dialogList={state.dialogs} textAreaValue={state.messageTextAreaValue} addMessage={addMessage} updateTextArea={updateTextArea}/>
    );
};*/
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