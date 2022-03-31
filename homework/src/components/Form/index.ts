import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {TTodo} from "../../store/todos/actions";
import {addTodo} from "../../store/todos/actions";
import Form from "./Form";
import { showNotification } from "../../store/notification/actions";

const mapDispatchToProps = (dispatch:Dispatch) => ({
    addTodo: (todo:TTodo) => dispatch(addTodo(todo)),
    showNotification: (type: string, message: string) => dispatch(showNotification(type,message)),
});

export default connect(null, mapDispatchToProps)(Form);
