import {ActionType} from "typesafe-actions";
import { Reducer } from 'redux';
import { CHANGE_THEME } from "./actionsTypes";
import {TTheme} from "./types";
import * as Actions from './actions';

type TActions = typeof Actions;
type TThemeActions = ActionType<TActions>;
const initialState = {dark: false};

const themeReducer: Reducer<TTheme, TThemeActions> = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {dark: !state.dark};
        default:
            return state;
    }
};

export default themeReducer;
