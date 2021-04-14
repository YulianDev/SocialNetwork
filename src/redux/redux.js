import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";

let _reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
});

const store = createStore(_reducers);

export default store;
