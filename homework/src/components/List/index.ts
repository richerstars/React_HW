import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ApplicationState} from "../../store/types";
import List from './List';
import { selectTodos } from "../../store/todos/selectors";
import { checkedTodo, deleteTodo } from "../../store/todos/actions";

const mapStateToProps = (state:ApplicationState) => ({
    todos: selectTodos(state)
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
    checkedTodo: (id:number) => dispatch(checkedTodo(id)),
    deleteTodo: (id:number) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(List);
