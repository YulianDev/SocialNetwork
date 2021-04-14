const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";

const initState = {
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
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id:4,
                message: state.postTextAreaValue,
            };
            state.posts.push(post);
            state.postTextAreaValue = "";
            return state;
        case UPDATE_POST_TEXT_AREA:
            state.postTextAreaValue = action.message;
            return state;
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

export default profileReducer;