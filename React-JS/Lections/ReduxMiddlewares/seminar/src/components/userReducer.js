const initialState = {
    users:[],
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                error: null,
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload
            }
        case 'FETCH_USERS_FAILED':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    };
};