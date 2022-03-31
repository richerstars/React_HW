import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {TTodo} from "../../store/todos/actions";
import {addTodo} from "../../store/todos/actions";
import Form from "./Form";
import { showNotification } from "../../store/notification/actions";
import { TNotify } from '../../store/notification/types';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodo: (todo: TTodo) => dispatch(addTodo(todo)),
    showNotification: (newTask: TNotify) => dispatch(showNotification(newTask)),
});

// @ts-ignore
export default connect(null, mapDispatchToProps)(Form);
