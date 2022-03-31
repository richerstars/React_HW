import { action } from "typesafe-actions";
import { CLEAR_NOTIFICATION, SHOW_NOTIFICATION } from "./actionsTypes";
import { TNotify } from "./types";

export const showNotification = (payload:TNotify) => ({type: SHOW_NOTIFICATION, payload});
export const clearNotification = () => action(CLEAR_NOTIFICATION);
