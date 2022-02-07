import React, {useContext,useEffect,useState,useRef} from 'react';
import {UserContext} from '../../context/UserContext';

const Form = (props) => {
    const {setUser} = useContext(UserContext);

    const [value, setValue] = useState('');
    const inputRef = useRef();
    const handleInputValue = (e) => {setValue(e.target.value )};
    useEffect(()=>{inputRef.current.focus();},[])
    const handleSubmitValue = () => {
        setUser(value);
        setValue('');
    }
    return (
        <div>
            <input ref={inputRef} onChange={handleInputValue} value={value} placeholder="Here some text"/>
            <button onClick={handleSubmitValue}> Touch me</button>
        </div>
    );
};

export default Form;