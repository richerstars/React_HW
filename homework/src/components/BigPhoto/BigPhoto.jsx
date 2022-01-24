import React from 'react';
import './BigPhoto.scss';

const BigPhoto = ({bigPhoto, closeBigPhoto}) => {
    const handleCloseBigPhoto = () => closeBigPhoto();
    return (
        <div className= "big-photo">
            <img alt="some date" src={bigPhoto}/>
            <span onClick={handleCloseBigPhoto} className="delete-btn">✘</span>
        </div>
    );
};

export default BigPhoto;
