import React from "react";

const ControlBar = ({isPlaying}: {isPlaying: boolean}) => {
    return (
        <div>
            <h3>Button Bar {isPlaying} </h3>
        </div>
    );
};

export default ControlBar;