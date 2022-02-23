import {connect} from 'react-redux';
import {addTodo} from "../../store/todos/actions";
import Form from "./Form";
import { showNotification } from "../../store/notification/actions";

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => dispatch(addTodo(todo)),
    showNotification: (type,message) => dispatch(showNotification(type,message)),
});

export default connect(null, mapDispatchToProps)(Form);
