import React, {useState,useRef,useEffect} from 'react';
import {StyledInput, StyledButton} from './styled';

const Form = ({addTodo,showNotification}) => {

    const [value, setValue] = useState('');
    const inputRef = useRef();
    const handleInputValue = (e) => {setValue(e.target.value )};
    useEffect(()=>{inputRef.current.focus();},[])

    const handleSubmitValue = () => {
        addTodo({
            value: value,
            id: Date.now(),
            isChecked: false,
        });
        showNotification({ message: `Task checked successfully`})
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
