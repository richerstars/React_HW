import React from 'react';

const TrackInfo = ({currentTrackIndex,tracks}) => {
    return (
        <>
            <img
                className="artwork"
                src={tracks[currentTrackIndex].image}
                alt={`track artwork for ${tracks[currentTrackIndex].title} by ${tracks[currentTrackIndex].artist}`}
            />
            <h2 className="title">{tracks[currentTrackIndex].title}</h2>
            <h3 className="artist">{tracks[currentTrackIndex].artist}</h3>
        </>
    );
};

export default TrackInfo;
