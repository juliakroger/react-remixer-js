import React, { useEffect } from "react";
import Remixer from "@siteremix/remixer";
import PlayButton from "../components/PlayButton";

const Remix = () => {
  useEffect(() => {
    runFirstRemixer();
    runSecondRemixer();
    runThirdRemixer();
  }, []);

  const runFirstRemixer = () => {
    Remixer.fromJS({
      remix: {
        selector: "#1",
      },
      steps: [
        {
          type: "animate",
          params: "scaleUp",
          options: { duration: "3s" },
        },
        {
          type: "animate",
          params: "tada",
          options: { duration: "3s" },
        },
      ],
      run: {},
    });
  };

  const runSecondRemixer = () => {
    const secondRemixer = Remixer.fromJS({
      remix: {
        selector: "#2",
      },
      steps: [
        {
          type: "animate",
          params: "scaleUp",
          options: { duration: "3s" },
        },
        {
          type: "animate",
          params: "tada",
          options: { duration: "3s" },
        },
      ],
    });

    secondRemixer.run();
  };

  const runThirdRemixer = () => {
    new Remixer("#3")
      .animate("scaleUp", { duration: 3 })
      .animate("tada", { duration: 3 })
      .run();
  };

  return (
    <div className="card row-column">
      <div>
        <h1 id="1">Hello :)</h1>
        <h1 id="2">How are you ?</h1>
        <h1 id="3">Bye</h1>
      </div>
      <PlayButton
        onClick={() => {
          runFirstRemixer();
          runSecondRemixer();
          runThirdRemixer();
        }}
      />
    </div>
  );
};

export default Remix;
