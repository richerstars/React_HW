import React from 'react';
import {StyledBtnsDiv, StyledButton, StyledTasksDiv,StyledParagraph} from './styled';

type TProps = {
    value: string,
    isChecked: boolean,
    id: number,
    checked: (id: number) => void,
    deleteTodo: (id: number) => void,
    showNotification: (message: { message: string }) => void
};

const ListItem = ({value, checked, id, deleteTodo, isChecked,showNotification}: TProps) => {
    const delTodo = () => {
        deleteTodo(id);
        showNotification({ message: `Task removed successfully`});
    };
    const moveToChecked = () => {
        checked(id);
        showNotification({ message: `Task checked successfully` });
    };
    return (
        <StyledTasksDiv isChecked={isChecked}>
            <StyledParagraph>{value}</StyledParagraph>
            <StyledBtnsDiv>
                <StyledButton onClick={delTodo}>Delete</StyledButton>
                <StyledButton onClick={moveToChecked}>{isChecked ? "Uncheck" : "Check" }</StyledButton>
            </StyledBtnsDiv>
        </StyledTasksDiv>
    );
};


export default ListItem;
