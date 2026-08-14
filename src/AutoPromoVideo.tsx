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

  let title = "AI 自动化视频工作流 · REMOTION 开源";
  let subtitle = "暗调极简风格 · 任何人均可一键复刻";
  let badge = "AI VIDEO AGENT";

  if (frame >= 0 && frame < 160) {
    title = "AI 自动剪辑 · 智能体全流程";
    subtitle = "AUTONOMOUS AI VIDEO GENERATION ENGINE";
    badge = "AI VIDEO ENGINE";
  } else if (frame >= 160 && frame < 310) {
    title = "全套开源 · 暗调极简组件库";
    subtitle = "SWISS MINIMALIST TECH KEYNOTE TEMPLATE";
    badge = "OPEN SOURCE TEMPLATE";
  } else if (frame >= 310 && frame < 502) {
    title = "极简工作流 · 拖入素材即可";
    subtitle = "ZERO CODE FRICTION · DRAG & DROP PIPELINE";
    badge = "ZERO FRICTION";
  } else if (frame >= 502 && frame < 640) {
    title = "高度自由 · 自然语言指挥 AI";
    subtitle = "NATURAL LANGUAGE AI PROMPT CONTROL";
    badge = "NATURAL PROMPT";
  } else if (frame >= 640 && frame < 746) {
    title = "多场景赋能 · 商业与知识发布";
    subtitle = "KEYNOTE / REPORT / TECH DEMO USE CASES";
    badge = "ALL USE CASES";
  } else {
    title = "开源项目 · 详见置顶评论区";
    subtitle = "INSTALL WITH YOUR AGENT TODAY";
    badge = "COMMUNITY RELEASE";
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
          '"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
      }}
    >
      {/* 3D Perspective Grid Background & Ambient Lighting */}
      <Background
        title={title}
        subtitle={subtitle}
        badge={badge}
        footerTag="REMOTION 4.0 · SWISS MINIMALIST SYSTEM · 2026"
      />

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
