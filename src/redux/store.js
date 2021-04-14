import messageReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";





const store = {
    _state: {
        profilePage: {

        },
        messagesPage: {

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
