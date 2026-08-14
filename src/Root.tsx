import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { TOTAL_FRAMES } from "./data/subtitles";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Gemini37Video"
        component={MainVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
