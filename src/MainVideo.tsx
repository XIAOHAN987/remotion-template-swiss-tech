import React from "react";
import { Sequence, AbsoluteFill, Audio, staticFile, useCurrentFrame } from "remotion";
import { Background } from "./components/Background";
import { SubtitleBar } from "./components/SubtitleBar";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2Benchmarks } from "./scenes/Scene2Benchmarks";
import { Scene3Multimodal } from "./scenes/Scene3Multimodal";
import { Scene4CodeAgent } from "./scenes/Scene4CodeAgent";
import { Scene5Comparison } from "./scenes/Scene5Comparison";
import { Scene6Robotics } from "./scenes/Scene6Robotics";
import { Scene7Outro } from "./scenes/Scene7Outro";

export const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Dynamic Chinese header titles per scene (Swiss typography)
  let sceneTitle = "全新发布 · GEMINI 3.7 FLASH";
  let sceneSubtitle = "综合能力迎来大幅升级";
  let sceneBadge = "GOOGLE DEEPMIND";

  if (frame >= 2636) {
    sceneTitle = "未来展望 · 持续进化";
    sceneSubtitle = "大模型行业白热化竞争";
    sceneBadge = "THE AI RACE";
  } else if (frame >= 2011) {
    sceneTitle = "具身智能 · 普惠科技";
    sceneSubtitle = "听障手语转文字与人形机器人模型";
    sceneBadge = "EMBODIED AI";
  } else if (frame >= 1618) {
    sceneTitle = "横向对比 · 价格与智商";
    sceneSubtitle = "对标 DeepSeek V4 Pro 0813 · 智商领先与成本解析";
    sceneBadge = "BENCHMARK COMPARISON";
  } else if (frame >= 1002) {
    sceneTitle = "代码工程 · 智能体质变";
    sceneSubtitle = "SWE-bench 测评大幅升级 · 复杂任务执行力突跃";
    sceneBadge = "SWE-BENCH PRO";
  } else if (frame >= 644) {
    sceneTitle = "原生多模态 · 音频与视频";
    sceneSubtitle = "极少数原生支持端到端音频的模型";
    sceneBadge = "NATIVE MULTIMODAL";
  } else if (frame >= 281) {
    sceneTitle = "基准评测 · 智能与极速";
    sceneSubtitle = "智能指数全球第二 · 输出速度断层领先";
    sceneBadge = "LMSYS ARENA";
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#060608" }}>
      {/* Audio Voiceover Track */}
      <Audio src={staticFile("3.7发布口播.wav")} />

      {/* Global Dynamic Flowing Grid Background */}
      <Background title={sceneTitle} subtitle={sceneSubtitle} badge={sceneBadge} />

      {/* Scene 1: Intro Webpage Demo (0.0s ~ 9.4s, 281 frames) */}
      <Sequence from={0} durationInFrames={281} name="Scene 1: Webpage Demo">
        <Scene1Intro />
      </Sequence>

      {/* Scene 2: Benchmarks & Speed (9.4s ~ 21.4s, 363 frames) */}
      <Sequence from={281} durationInFrames={363} name="Scene 2: Benchmarks">
        <Scene2Benchmarks />
      </Sequence>

      {/* Scene 3: Multimodal Interview Demo (21.4s ~ 33.4s, 358 frames) */}
      <Sequence from={644} durationInFrames={358} name="Scene 3: Multimodal">
        <Scene3Multimodal />
      </Sequence>

      {/* Scene 4: Code Agent 4-Card Carousel (33.4s ~ 53.9s, 616 frames) */}
      <Sequence from={1002} durationInFrames={616} name="Scene 4: Code Agent Carousel">
        <Scene4CodeAgent />
      </Sequence>

      {/* Scene 5: Price Comparison with DeepSeek (53.9s ~ 67.1s, 393 frames) */}
      <Sequence from={1618} durationInFrames={393} name="Scene 5: Model Comparison">
        <Scene5Comparison />
      </Sequence>

      {/* Scene 6: Sign Language & Humanoid Robotics (67.1s ~ 87.8s, 625 frames) */}
      <Sequence from={2011} durationInFrames={625} name="Scene 6: Robotics & Sign">
        <Scene6Robotics />
      </Sequence>

      {/* Scene 7: Grand Outro (87.8s ~ 91.3s, 104 frames) */}
      <Sequence from={2636} durationInFrames={104} name="Scene 7: Outro">
        <Scene7Outro />
      </Sequence>

      {/* Synchronized Chinese Subtitles Bar */}
      <SubtitleBar />
    </AbsoluteFill>
  );
};
