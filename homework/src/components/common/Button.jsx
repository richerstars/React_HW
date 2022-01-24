import React from 'react';

const Button = ({text, changePhotos}) => {
    return (
        <div>
           <button onClick={changePhotos}>{text}</button>
        </div>
    );
};

export default Button;