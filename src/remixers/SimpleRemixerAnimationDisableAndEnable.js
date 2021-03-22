import React, { useEffect, useState } from "react";
import Remixer from "@siteremix/remixer";
import PlayButton from "../components/PlayButton";

const Remix = () => {
  const [disabled, setDisabled] = useState(false);

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
          params: "tada",
          options: { duration: "3s", disabled },
        },
      ],
      run: {},
    });
  };

  return (
    <div className="card row-column">
      <div>
        <input
          type="checkbox"
          id="enable-disabled-text-animation"
          name="enable-disabled-text-animation"
          checked={!disabled}
          onClick={() => setDisabled(!disabled)}
        />
        <label for="enable-disabled-text-animation">
          Enable text animation
        </label>
      </div>

      <div id="my-text" style={{ fontSize: "20px", padding: "20px" }}>
        You can enable and disable the animation of this text!!
      </div>
      <PlayButton onClick={runRemixer} />
    </div>
  );
};

export default Remix;
