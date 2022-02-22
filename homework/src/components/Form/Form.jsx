import React, {useState,useRef,useEffect} from 'react';
import {StyledInput, StyledButton} from './styled';
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todos/actions";
import { showNotification } from "../../store/notification/actions";

const Form = () => {

    const dispatch = useDispatch();
    const handleAddTodo = (newTodo) => dispatch(addTodo(newTodo))

    const [value, setValue] = useState('');
    const inputRef = useRef();
    const handleInputValue = (e) => {setValue(e.target.value )};
    useEffect(()=>{
       inputRef.current.focus();
    },[])
    const handleSubmitValue = () => {
        handleAddTodo({
            value: value,
            id: Date.now(),
            isChecked: false,
        });
        dispatch( showNotification({ message: `Task added successfully`}));
        setValue('');
    }

    return (
        <>
            <StyledInput ref={inputRef} onChange={handleInputValue} value={value}
                         placeholder='Here some text'/>
            <StyledButton disabled={!value.trim()} onClick={handleSubmitValue}>ADD</StyledButton>
        </>
    );
};

export default Form;
