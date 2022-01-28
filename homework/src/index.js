import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayerClass from './components/ClassPlayer/AudioPlayerClass';
import AudioPlayer from './components/HooksPlayer/AudioPlayer';
import tracks from "./tracks";

ReactDOM.render(
    // <AudioPlayer tracks={tracks}/>,
    <AudioPlayerClass/>,
  document.getElementById('root')
);
