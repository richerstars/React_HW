import { CHANGE_THEME } from "./actionsTypes";

const initialState = { theme: {dark: false}};

const themeReducer = (state = initialState, { type }) => {
    switch (type) {
        case CHANGE_THEME:
            return {...state, theme: {dark: !state.theme.dark}};
        default:
            return state;
    }
};

export default themeReducer;
