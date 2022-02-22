import { CLEAR_NOTIFICATION, SHOW_NOTIFICATION } from "./actionsTypes";

export const showNotification = (payload) => ({type: SHOW_NOTIFICATION, payload});
export const clearNotification = (payload) => ({type: CLEAR_NOTIFICATION, payload});
