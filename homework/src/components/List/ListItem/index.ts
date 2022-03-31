import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {showNotification} from "../../../store/notification/actions";
import { TNotify } from '../../../store/notification/types';
import ListItem from "./ListItem";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showNotification: (payload: TNotify) => dispatch(showNotification(payload)),
});

// @ts-ignore
export default connect(null, mapDispatchToProps)(ListItem);
