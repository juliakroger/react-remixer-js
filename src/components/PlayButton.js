import React from "react";
import playImage from "../images/botao-play.svg";

const PlayButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <img width="40px" src={playImage} alt="play" />
    </div>
  );
};

export default PlayButton;
