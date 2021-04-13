const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";
const ADD_POST = "ADD-POST";
const UPDATE_MESSAGE_TEXT_AREA = "UPDATE-MESSAGE-TEXT-AREA";
const ADD_MESSAGE = "ADD-MESSAGE";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message:"Some news: now I'm React Developer in Global Logic! :)"},
                {id:2, message:"Okay, now I'm looking for React Developer Position ^_^"},
                {id:3, message:"How is your day going?"},
            ],
            postTextAreaValue: "Hek",
            generalInfo: [
                {section:"Birthday", data:"September 9"},
                {section:"Current city", data:"Lviv"},
                {section:"Studied at", data:"Lviv University of Trade and Economics"},
                {section:"Website", data:"https://yuliandev.github.io/YulianKoval"},
            ],
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Yulian", time: "4:10", message: "Hello! My name is Yulian!"},
                {id: 2, name: "Yuliia", time: "4:12", message: "Hello! I'm Yuliia! Nice to meet you, how are you?"},
            ],
            messageTextAreaValue:"",
            members: [
                {id: 1, name: "Yuliia", date: "9 April"},
                {id: 2, name: "Alesya", date: "9 April"},
                {id: 3, name: "Anastasiya", date: "6 April"},
                {id: 4, name: "Khrystyna", date: "5 April"},
                {id: 5, name: "Diana", date: "3 April"},
                {id: 6, name: "Nastia", date: "2 April"},
            ],
        }
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_POST_TEXT_AREA) {
            this._updatePostTextArea(action.message);
        } else if (action.type === UPDATE_MESSAGE_TEXT_AREA) {
            this._updateMessageTextArea(action.message);
        } else if (action.type === ADD_MESSAGE) {
            this._addMessage(action.name, action.time);
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {},
    _updatePostTextArea(message) {
        this._state.profilePage.postTextAreaValue = message;
        this._callSubscriber(this._state);
    },
    _addPost() {
        let post = {
            id:4,
            message: this._state.profilePage.postTextAreaValue,
        };
        this._state.profilePage.posts.push(post);
        this._updatePostTextArea("");
        this._callSubscriber(this._state);
    },
    _updateMessageTextArea(message) {
        this._state.messagesPage.messageTextAreaValue = message;
        this._callSubscriber(this._state);
    },
    _addMessage(name, time) {
        let message = {
            id:3,
            name: name,
            time: time,
            message: this._state.messagesPage.messageTextAreaValue,
        };
        this._state.messagesPage.dialogs.push(message);
        this._updateMessageTextArea("");
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextAreaActionCreator = (message) => {
    return  {type: UPDATE_POST_TEXT_AREA,
             message: message,
            }
};

export const updateMessageTextAreaActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT_AREA,
        message: message,
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});



export default store;
