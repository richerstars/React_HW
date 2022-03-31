import React, { useState, useRef, useEffect } from 'react';
import { StyledInput, StyledButton } from './styled';
import { TTodo } from "../../store/todos/actions";

type TProps = {
    addTodo: (task: TTodo) => void,
    showNotification: (message: { message: string }) => void
};

const Form = ({ addTodo, showNotification }: TProps) => {

    const [value, setValue] = useState('');
    const inputRef = useRef();
    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        // @ts-ignore
        inputRef.current.focus();
    }, []);

    const handleSubmitValue = () => {
        addTodo({
            value: value,
            id: Date.now(),
            isChecked: false,
        });
        showNotification({ message: `Task checked successfully` });
        setValue('');
    };

    return (
        <>
            <StyledInput ref={ inputRef } onChange={ handleInputValue } value={ value }
                placeholder='Here some text'/>
            <StyledButton disabled={ !value.trim() } onClick={ handleSubmitValue }>ADD</StyledButton>
        </>
    );
};

export default Form;
