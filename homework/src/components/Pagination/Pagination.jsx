import React from 'react';
import Button from "../common/Button";

const Pagination = ({changePhotos}) => {
    const array1 = new Array(100);
    console.log(array1);
    const array = [1,2,3,4,5];
    return (
        <div className="div-buttons">
            {array.map((el,index) =><Button key={index} text={el} changePhotos={changePhotos}/> )}
        </div>
    );
};

export default Pagination;