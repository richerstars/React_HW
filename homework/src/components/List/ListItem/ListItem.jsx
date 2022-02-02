import React from 'react';
import {StyledBtnsDiv, StyledButton, StyledTasksDiv,StyledParagraph} from './styled';

const ListItem = ({value, checked, id, deleteTodo, isChecked}) => {
    const delTodo = () => {
        deleteTodo(id);
    }
    const moveToChecked = () => {
        checked(id);
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