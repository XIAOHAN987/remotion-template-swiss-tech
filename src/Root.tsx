import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { AutoPromoVideo } from "./AutoPromoVideo";
import { TOTAL_FRAMES } from "./data/subtitles";
import { AUTO_PROMO_TOTAL_FRAMES } from "./data/autoPromoSubtitles";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AutoPromoVideo"
        component={AutoPromoVideo}
        durationInFrames={AUTO_PROMO_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
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
