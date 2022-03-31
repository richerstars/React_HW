import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {showNotification} from "../../../store/notification/actions";
import ListItem from "./ListItem";

const mapDispatchToProps = (dispatch:Dispatch) => ({
    showNotification: (type:string,message:string) => dispatch(showNotification(type,message)),
});

export default connect(null, mapDispatchToProps)(ListItem);
