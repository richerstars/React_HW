import React from 'react';
import { ReactComponent as Prev } from "../../helpers/buttonsPhoto/prev.svg";
import { ReactComponent as Pause } from "../../helpers/buttonsPhoto/pause.svg";
import { ReactComponent as Play } from "../../helpers/buttonsPhoto/play.svg";
import { ReactComponent as Next } from "../../helpers/buttonsPhoto/next.svg";
import Button from "../common/Button";

const ControlsClass = ({playPrevTrack, isPlaying, playTrack, playNewTrack}) => {
    return (
        <div className="audio-controls">
            <Button classname={"prev"} ariaLabel={"Previous"} onClickMethod={playPrevTrack} styling={<Prev/>}/>
            {
                isPlaying
                    ? (<Button classname={"pause"} ariaLabel={"Pause"} onClickMethod={playTrack} styling={<Pause/>}/>)
                    : (<Button classname={"play"} ariaLabel={"Play"} onClickMethod={playTrack} styling={<Play/>}/>)
            }
            <Button classname={"next"} ariaLabel={"Next"} onClickMethod={playNewTrack} styling={<Next/>}/>
        </div>
    );
};

export default ControlsClass;
