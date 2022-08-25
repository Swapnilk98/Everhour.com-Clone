import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      <i className="fa-solid fa-circle-play"></i>
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" style={{marginRight:"-15px"}} onClick={props.handleReset}>
      <i className="fa-regular fa-circle-stop"></i>
      </div>  
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? <i className="fa-solid fa-circle-play"></i> : <i className="fa-solid fa-pause"></i>}
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
