import messageReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";





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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {},
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}






export default store;
