import React from 'react';
import {StyledBtnsDiv, StyledButton, StyledTasksDiv,StyledParagraph} from './styled';
import { useDispatch } from "react-redux";
import { showNotification } from "../../../store/notification/actions";

const ListItem = ({value, checked, id, deleteTodo, isChecked}) => {
    const dispatch = useDispatch();
    const delTodo = () => {
        deleteTodo(id);
        dispatch( showNotification({ message: `Task removed successfully`}));
    }
    const moveToChecked = () => {
        checked(id);
        dispatch( showNotification({ message: `Task checked successfully`}));
    }
    return (
        <StyledTasksDiv isChecked={isChecked}>
            <StyledParagraph>{value}</StyledParagraph>
            <StyledBtnsDiv>
                <StyledButton onClick={delTodo}>Delete</StyledButton>
                <StyledButton onClick={moveToChecked}>{isChecked ? "Uncheck" : "Check" }</StyledButton>
            </StyledBtnsDiv>
        </StyledTasksDiv>
    );
}


export default ListItem;
