const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";

const initState = {
    posts: [
        {id:1, message:"Some news: now I'm React Developer in Global Logic! :)"},
        {id:2, message:"Okay, now I'm looking for React Developer Position ^_^"},
        {id:3, message:"How is your day going?"},
    ],
    postTextAreaValue: "Hek",
    profileInfo: null,
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
        return {
            ...state,
            posts: [...state.posts, {id:4, message: state.postTextAreaValue}],
            postTextAreaValue: ""
        };
        case UPDATE_POST_TEXT_AREA:
            return {
                ...state,
                postTextAreaValue: action.message
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profile,
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextAreaActionCreator = (message) => {
    return  {type: UPDATE_POST_TEXT_AREA,
        message: message,
    }
};
export const setProfileInfo = (profile) => ({type: SET_PROFILE_INFO, profile})

export default profileReducer;