import React from 'react';
import './Button.scss';

const Button = ({text, changePhotos}) => {
    const handleChangePhotos = (e)=> {changePhotos(e.target.textContent);}
    return (
        <div >
           <button className="buttons" onClick={handleChangePhotos}>{text}</button>
        </div>
    );
};

export default Button;
