const SET_AUTHORIZATION_DATA = "SET_AUTHORIZATION_DATA";



const initState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
}

const authorizationReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: true,
            };

        default:
            return state;
    }
}


export const setAuthorizationData = (id, login, email) =>  ({type: SET_AUTHORIZATION_DATA, data: {id, login, email}});




export default authorizationReducer;