const FOLLOW = "FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS = "SET_USERS";
let initState = {
    users: [
        {id:1, fullName: "Max Krap", follow: false, status:"How is your day going?",
        avatarImg:"https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"},
        {id:2, fullName: "Yura Vix", follow: true, status:"I'm top",
        avatarImg:"https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"},
        {id:3, fullName: "ALina Shale", follow: false, status:"Live in London",
        avatarImg:"https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"},
        {id:4, fullName: "Vasya Super", follow: true, status:"Looking for new job",
        avatarImg:"https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"},
    ],
}

let friendsReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            debugger
            return {
                ...state,
                users: [...state.users.map(user => {
                    return (user.id === action.id)? {...user, follow: true} : user;
                })]
            };
        case UNFOLLOW:
            debugger;
            return {
                ...state,
                users: [...state.users.map(user => {
                    return (user.id === action.id) ? {...user, follow: false} : user;
                })]
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.users],
            };
        default:
            return state;
    }
};

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        id: userId,
    };
};

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        id: userId,
    };
};

export const setUsersAC = (usersList) => {
    return {
        type: SET_USERS,
        users: usersList,
    }
};

export default friendsReducer;