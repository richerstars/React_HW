import {connect} from "react-redux";
import List from './List';
import { selectTodos } from "../../store/todos/selectors";
import { checkedTodo, deleteTodo } from "../../store/todos/actions";

const mapStateToProps = state => ({
    todos: selectTodos(state)
});

const mapDispatchToProps = dispatch => ({
    checkedTodo: id => dispatch(checkedTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(List);
