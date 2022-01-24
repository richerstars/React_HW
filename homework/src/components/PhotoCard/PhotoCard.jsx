import React from 'react';
import '../MainPage/MainPage.scss';
import BigPhotoItem from "../BigPhoto/BigPhotoItem/BigPhotoItem";
const PhotoCard = ({photos, getBigPhoto}) => {
    return (
        <div className="cards">
            {photos.map((el) =>
                <BigPhotoItem
                    key={el.id}
                    src={el.thumbnailUrl}
                    bigPhoto={el.url}
                    getBigPhoto={getBigPhoto}
                />
            )}
        </div>
    );
};

export default PhotoCard;
