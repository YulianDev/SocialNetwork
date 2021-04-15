const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT_AREA = "UPDATE-MESSAGE-TEXT-AREA";

const initState = {
    dialogs: [
        {id: 1, name: "Yulian", time: "4:10", message: "Hello! My name is Yulian!"},
        {id: 2, name: "Yuliia", time: "4:12", message: "Hello! I'm Yuliia! Nice to meet you, how are you?"},
    ],
    messageTextAreaValue: "",
    members: [
        {id: 1, name: "Yuliia", date: "9 April"},
        {id: 2, name: "Alesya", date: "9 April"},
        {id: 3, name: "Anastasiya", date: "6 April"},
        {id: 4, name: "Khrystyna", date: "5 April"},
        {id: 5, name: "Diana", date: "3 April"},
        {id: 6, name: "Nastia", date: "2 April"},
    ],
}

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                dialogs: [...state.dialogs, {
                    id: 3,
                    name: action.name,
                    time: action.time,
                    message: state.messageTextAreaValue
                }],
                messageTextAreaValue: "",
            };
        case UPDATE_MESSAGE_TEXT_AREA:
            return {
                ...state,
                messageTextAreaValue: action.message,
            };
        default:
            return state;
    }
    ;
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