import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";

let _reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsPage: friendsReducer,
});

const store = createStore(_reducers);

window.store = store;
export default store;
