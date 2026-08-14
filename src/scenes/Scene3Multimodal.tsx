import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig, OffthreadVideo, staticFile } from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";

export const Scene3Multimodal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9, stiffness: 85 },
  });

  // Seamless exit transition
  const exitOpacity = interpolate(frame, [348, 358], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Feature cards spring
  const card1Spring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 16, mass: 0.7, stiffness: 90 },
  });

  const card2Spring = spring({
    frame: frame - 160,
    fps,
    config: { damping: 16, mass: 0.7, stiffness: 90 },
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: exitOpacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "100px 80px 70px 80px",
        zIndex: 10,
      }}
    >
      {/* Left: Interview Video Window with OffthreadVideo */}
      <SwissCard
        style={{
          width: "1040px",
          height: "720px",
          transform: `scale(${interpolate(enterSpring, [0, 1], [0.94, 1])})`,
          backgroundColor: "#0d0e12",
        }}
      >
        <OffthreadVideo
          src={staticFile("Google AI 3.7flsh采访画面.mp4")}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Top Tag Badge */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(10, 10, 14, 0.85)",
            backdropFilter: "blur(16px)",
            padding: "6px 16px",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.16)",
          }}
        >
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#38bdf8" }} />
          <span style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>
            MULTIMODAL ARCHITECTURE
          </span>
        </div>
      </SwissCard>

      {/* Right: Swiss Multimodal Capability Panel */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "460px",
          transform: `translateX(${interpolate(enterSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <SwissWhiteBadge
          badge="NATIVE REASONING"
          title="原生多模态理解"
          subtitle="极少数原生支持端到端音频的模型"
        />

        {/* Feature 1: Native Audio */}
        <div
          style={{
            transform: `translateX(${interpolate(card1Spring, [0, 1], [30, 0])}px)`,
            opacity: card1Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 700 }}>
              原生深度音频理解
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", lineHeight: "1.4" }}>
              直接解析音频原始声学特征，保留语气、情感与语境信息。
            </div>
          </SwissCard>
        </div>

        {/* Feature 2: Tier-1 Video */}
        <div
          style={{
            transform: `translateX(${interpolate(card2Spring, [0, 1], [30, 0])}px)`,
            opacity: card2Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 700 }}>
                视频解析第一梯队
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 800,
                }}
              >
                TIER 1
              </div>
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", lineHeight: "1.4" }}>
              超长上下文视频素材毫秒级理解与密集关键帧检索。
            </div>
          </SwissCard>
        </div>
      </div>
    </div>
  );
};
