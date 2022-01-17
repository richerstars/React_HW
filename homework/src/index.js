import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from '../src/components/AudioPlayer'
import tracks from "./tracks";

ReactDOM.render(
    <AudioPlayer tracks={tracks}/>,
  document.getElementById('root')
);
