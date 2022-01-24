import React from 'react';
import '../MainPage/MainPage.scss';
const PhotoCard = ({photos}) => {
    console.log(photos);
    return (
        <div className="cards">
            {photos.map((el) =>
                <div key={el.id}>
                    <img alt="some photo" src={el.thumbnailUrl}/>
                </div>

            )}
        </div>
    );
};

export default PhotoCard;