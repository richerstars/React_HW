import { connect } from 'react-redux';
import App from "./App";
import { changeTheme } from "./store/theme/actions";
import { selectTheme } from "./store/theme/selectors";
import { Dispatch } from "redux";
import {ApplicationState} from "./store/types";

const mapStateToProps = (state:ApplicationState) => ({
    dark: selectTheme(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeTheme: () => dispatch(changeTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
