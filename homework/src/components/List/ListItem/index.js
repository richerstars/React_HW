import {connect} from 'react-redux';
import {showNotification} from "../../../store/notification/actions";
import ListItem from "./ListItem";

const mapDispatchToProps = dispatch => ({
    showNotification: (type,message) => dispatch(showNotification(type,message)),
});

export default connect(null, mapDispatchToProps)(ListItem);
