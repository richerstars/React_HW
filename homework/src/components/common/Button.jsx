import React from 'react';
const Button = ({onClickMethod, classname, ariaLabel, styling}) => {
    return (
        <button type="button" className={classname} aria-label={ariaLabel} onClick={onClickMethod}>
            {styling}
        </button>
    );
};

export default Button;
