import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from '../src/components/AudioPlayer';
import AudioPlayerClass from '../src/components/AudioPlayerClass';
import tracks from "./tracks";

ReactDOM.render(
    // <AudioPlayer tracks={tracks}/>,
    <AudioPlayerClass tracks={tracks}/>,
  document.getElementById('root')
);
