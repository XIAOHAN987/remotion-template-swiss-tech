import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";

export const AutoPromoScene6Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const starPulse = 1 + Math.sin(frame * 0.1) * 0.05;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 100px",
        gap: "36px",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <SwissWhiteBadge
        title="开源项目名称 · 见置顶评论区"
        subtitle="GET STARTED WITH YOUR AI CODING AGENT TODAY"
        badge="GITHUB OPEN SOURCE"
      />

      <SwissCard
        style={{
          width: "100%",
          maxWidth: "1400px",
          padding: "44px 50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        {/* Repo Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <span style={{ fontSize: "36px", transform: `scale(${starPulse})` }}>🌟</span>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "1px",
              fontFamily: "Consolas, 'Courier New', monospace",
            }}
          >
            remotion-template-swiss-tech
          </div>
        </div>

        {/* Command Pill */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "100px",
            padding: "14px 36px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span style={{ color: "#ef4444", fontWeight: 800, fontSize: "18px" }}>$</span>
          <span style={{ color: "#38bdf8", fontSize: "20px", fontFamily: "Consolas, monospace", fontWeight: 600 }}>
            git clone https://github.com/XIAOHAN987/remotion-template-swiss-tech.git
          </span>
        </div>

        {/* Action Hints */}
        <div style={{ display: "flex", gap: "24px", marginTop: "10px" }}>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              padding: "10px 24px",
              borderRadius: "100px",
              fontSize: "16px",
              fontWeight: 700,
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            💬 详细项目链接已置顶在评论区
          </div>
          <div
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.15)",
              padding: "10px 24px",
              borderRadius: "100px",
              fontSize: "16px",
              fontWeight: 700,
              color: "#4ade80",
              border: "1px solid rgba(74, 222, 128, 0.3)",
            }}
          >
            ✨ 复制给你的 Agent 一键安装体验
          </div>
        </div>
      </SwissCard>
    </div>
  );
};
