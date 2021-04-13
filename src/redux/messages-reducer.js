const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT_AREA = "UPDATE-MESSAGE-TEXT-AREA";

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id:3,
                name: action.name,
                time: action.time,
                message: state.messageTextAreaValue,
            };
            state.dialogs.push(message);
            state.messageTextAreaValue = "";
            return state;
        case UPDATE_MESSAGE_TEXT_AREA:
            state.messageTextAreaValue = action.message;
            return state;
        default:
            return state;
    };
};

export const updateMessageTextAreaActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT_AREA,
        message: message,
    }
};

export const addMessageActionCreator = (name, time) => {
    return {
        type: ADD_MESSAGE,
        name: name,
        time: time,
    }
};

export default messageReducer;