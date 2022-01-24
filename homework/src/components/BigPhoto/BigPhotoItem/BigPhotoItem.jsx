import React from 'react';

const BigPhotoItem = ({src, bigPhoto, getBigPhoto}) => {
    const handleBigPhotos = () => getBigPhoto(bigPhoto);
    return (
        <div onClick={handleBigPhotos} className="photo">
            <img alt='some date' src={src}/>
        </div>
    );
};

export default BigPhotoItem;
