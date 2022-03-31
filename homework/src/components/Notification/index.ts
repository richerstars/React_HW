import {connect} from "react-redux";
import {Dispatch} from "redux";
import Notification from './Notification';
import { clearNotification } from "../../store/notification/actions";
import { selectNotification } from "../../store/notification/selectors";
import {ApplicationState} from "../../store/types";

const mapStateToProps = (state:ApplicationState) => ({
    notification: selectNotification(state)
});
const mapDispatchToProps = (dispatch:Dispatch) => ({
    clearNotification: () => dispatch(clearNotification())
});

export default connect(mapStateToProps,mapDispatchToProps)(Notification);
