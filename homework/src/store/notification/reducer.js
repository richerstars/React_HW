import { CLEAR_NOTIFICATION, SHOW_NOTIFICATION } from "./actionsTypes";

const initialState = { notification: {type: '', message: ''}};

const notificationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_NOTIFICATION:
            return {...state,notification: {type: payload.type || 'success', message:payload.message}};
        case CLEAR_NOTIFICATION:
            return {...state,notification: {type: '', message: ''}};
        default:
            return state;
    }
};

export default notificationReducer;
