import { CLEAR_NOTIFICATION, SHOW_NOTIFICATION } from "./actionsTypes";

const initialState = {type: '', message: ''};

const notificationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_NOTIFICATION:
            return {type: payload.type || 'success', message:payload.message};
        case CLEAR_NOTIFICATION:
            return {type: '', message: ''};
        default:
            return state;
    }
};

export default notificationReducer;
