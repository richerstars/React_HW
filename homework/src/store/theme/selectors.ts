import { ApplicationState } from "../types";

export const selectTheme = (state:ApplicationState) => state.theme.dark;
