import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Background } from "./components/Background";
import { SubtitleBar } from "./components/SubtitleBar";
import { AUTO_PROMO_SUBTITLES } from "./data/autoPromoSubtitles";

import { AutoPromoScene1AI } from "./scenes_autopromo/AutoPromoScene1AI";
import { AutoPromoScene2OpenSource } from "./scenes_autopromo/AutoPromoScene2OpenSource";
import { AutoPromoScene3Folder } from "./scenes_autopromo/AutoPromoScene3Folder";
import { AutoPromoScene4AIControl } from "./scenes_autopromo/AutoPromoScene4AIControl";
import { AutoPromoScene5UseCases } from "./scenes_autopromo/AutoPromoScene5UseCases";
import { AutoPromoScene6Outro } from "./scenes_autopromo/AutoPromoScene6Outro";

export const AutoPromoVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Dynamic header titles based on active scene
  let headerTitle = "AI 自动化视频工作流 · REMOTION 开源";
  let headerSubtitle = "瑞士极简风格 · 任何人均可一键复刻";

  if (frame >= 0 && frame < 160) {
    headerTitle = "AI 自动剪辑 · 智能体全流程";
    headerSubtitle = "AUTONOMOUS AI VIDEO GENERATION ENGINE";
  } else if (frame >= 160 && frame < 310) {
    headerTitle = "全套开源 · 瑞士极简组件库";
    headerSubtitle = "GITHUB OPEN SOURCE · MIT LICENSE";
  } else if (frame >= 310 && frame < 502) {
    headerTitle = "极简工作流 · 拖入素材即可";
    headerSubtitle = "ZERO CODE FRICTION · DRAG & DROP PIPELINE";
  } else if (frame >= 502 && frame < 640) {
    headerTitle = "高度自由 · 自然语言指挥 AI";
    headerSubtitle = "NATURAL LANGUAGE AI PROMPT CONTROL";
  } else if (frame >= 640 && frame < 746) {
    headerTitle = "多场景赋能 · 商业与知识发布";
    headerSubtitle = "KEYNOTE / REPORT / TECH DEMO USE CASES";
  } else {
    headerTitle = "项目开源 · 见置顶评论区";
    headerSubtitle = "INSTALL WITH YOUR AGENT TODAY";
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#060608",
        position: "relative",
        overflow: "hidden",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* 3D Perspective Grid Background & Ambient Lighting */}
      <Background headerTitle={headerTitle} headerSubtitle={headerSubtitle} />

      {/* Voiceover Audio */}
      <Audio src={staticFile("自动剪辑.wav")} volume={1} />

      {/* Scene Sequences */}
      <Sequence from={0} durationInFrames={160}>
        <AutoPromoScene1AI />
      </Sequence>

      <Sequence from={160} durationInFrames={150}>
        <AutoPromoScene2OpenSource />
      </Sequence>

      <Sequence from={310} durationInFrames={192}>
        <AutoPromoScene3Folder />
      </Sequence>

      <Sequence from={502} durationInFrames={138}>
        <AutoPromoScene4AIControl />
      </Sequence>

      <Sequence from={640} durationInFrames={106}>
        <AutoPromoScene5UseCases />
      </Sequence>

      <Sequence from={746} durationInFrames={154}>
        <AutoPromoScene6Outro />
      </Sequence>

      {/* Subtitles Overlay */}
      <SubtitleBar subtitles={AUTO_PROMO_SUBTITLES} />
    </div>
  );
};
