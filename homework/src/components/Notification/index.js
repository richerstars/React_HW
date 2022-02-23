import {connect} from "react-redux";
import Notification from './Notification';
import { clearNotification } from "../../store/notification/actions";
import { selectNotification } from "../../store/notification/selectors";

const mapStateToProps = state => ({
    notification: selectNotification(state)
});
const mapDispatchToProps = dispatch => ({
    clearNotification: () => dispatch(clearNotification())
});

export default connect(mapStateToProps,mapDispatchToProps)(Notification);
