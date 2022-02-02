import React, {useState,useRef,useEffect} from 'react';
import {StyledInput, StyledButton} from './styled';

const Form = ({addItem}) => {

    const [value, setValue] = useState('');
    const inputRef = useRef();
    const handleInputValue = (e) => {setValue(e.target.value )};
    useEffect(()=>{
       inputRef.current.focus();
    },[])
    const handleSubmitValue = () => {
        addItem({
            value: value,
            id: Date.now(),
            isChecked: false,
        });
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