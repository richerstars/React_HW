import * as Actions from "./actions";
import {ActionType} from "typesafe-actions";
import {Reducer} from "redux";
import { CLEAR_NOTIFICATION, SHOW_NOTIFICATION } from "./actionsTypes";
import {TNotify} from "./types";

type TActions = typeof Actions;
type TTNotifyActions = ActionType<TActions>;
const initialState = {type: '', message: ''};

const notificationReducer:Reducer<TNotify, TTNotifyActions> = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {type: action.payload.type || 'success', message:action.payload.message};
        case CLEAR_NOTIFICATION:
            return {type: '', message: ''};
        default:
            return state;
    }
};

export default notificationReducer;
