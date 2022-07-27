export const initialListState = {
    users: [],
    total: 0,
    next: null
};

export const listReducer = (state = initialState, action) => {
    switch(action.type){
        case "loadUsers":
            return {...action.payload}
        case "clearUsers":
            return {users: [], total: 0, next: null}
        default:
            return state
    }
}

export const loadUsersAction = (users, total, next) => {
    return {
        type: "loadUsers",
        payload: {
            users,
            total,
            next
        }
    }
}

export const clearUsersAction = () => {
    return {
        type: "clearUsers"
    }
}