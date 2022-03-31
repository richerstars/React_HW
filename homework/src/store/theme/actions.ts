import { CHANGE_THEME } from "./actionsTypes";
import {action} from "typesafe-actions";

export const changeTheme = () => action(CHANGE_THEME);
