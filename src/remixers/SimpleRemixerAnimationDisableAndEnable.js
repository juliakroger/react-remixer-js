import React, { useEffect, useState } from "react";
import Remixer from "@siteremix/remixer";
import PlayButton from "../components/PlayButton";

const CheckItem = ({ id, checkedItem, changeCheckItem, text }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checkedItem}
        onClick={changeCheckItem}
      />
      <label for={id}>{text}</label>
    </div>
  );
};

const Remix = () => {
  const [disabled, setDisabled] = useState(false);
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    runRemixer();
  }, [disabled]);

  const runRemixer = () => {
    Remixer.fromJS({
      remix: {
        selector: "#my-text",
      },
      steps: [
        {
          type: "animate",
          params: "scaleUp",
          options: {
            duration: "3s",
            disabled,
            useBlur: blur,
          },
        },
      ],
      run: {},
    });
  };

  return (
    <div className="card row-column">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CheckItem
            id="enable-disabled-text-animation"
            checkedItem={!disabled}
            changeCheckItem={() => setDisabled(!disabled)}
            text="Enable text animation"
          />
          <CheckItem
            id="enable-disabled-blur"
            checkedItem={!blur}
            changeCheckItem={() => setBlur(!blur)}
            text="Enable blur"
          />
        </div>
      </div>

      <div id="my-text" style={{ fontSize: "20px", padding: "20px" }}>
        You can enable and disable the animation of this text!!
      </div>
      <PlayButton onClick={runRemixer} />
    </div>
  );
};

export default Remix;
