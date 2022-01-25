import React from 'react';
import './BigPhoto.scss';

const BigPhoto = ({bigPhoto, closeBigPhoto}) => (
    <div className="big-photo">
        <img alt="some date" src={bigPhoto}/>
        <span onClick={closeBigPhoto} className="delete-btn">✘</span>
    </div>
);

export default BigPhoto;
