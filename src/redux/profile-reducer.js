const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";


const profileReducer = (state, action) => {
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