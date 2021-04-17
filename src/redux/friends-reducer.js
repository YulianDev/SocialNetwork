const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";

const initState = {
    friends: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const friendsReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if (friend.id === action.id) {
                        return {...friend, follow: true}
                    }
                    return friend;
                })
            };
        case UNFOLLOW:
            return {
            ...state,
            friends: state.friends.map(friend => {
                if (friend.id === action.id) {
                    return {...friend, follow: false}
                }
                return friend;
            })
        };
        case SET_USERS:
            return {
                ...state,
                friends: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            };
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsersCount:action.count,
            }
        }
        default:
            return state;
    }
}


export const followActionCreator = (id) =>  ({type: FOLLOW, id});
export const unfollowActionCreator = (id) => ({type: UNFOLLOW, id});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setPageNumberActionCreator = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersActionCreator = (count) => ({type: SET_TOTAL_USERS, count});



export default friendsReducer;