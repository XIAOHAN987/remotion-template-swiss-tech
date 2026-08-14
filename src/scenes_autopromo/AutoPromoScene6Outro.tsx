import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";
import { StarIcon, ChatCommentIcon, SparkleIcon } from "../components/SvgIcons";

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
        title="开源项目名称 · 详见置顶评论区"
        subtitle="GET STARTED WITH YOUR AI CODING AGENT TODAY"
        badge="OPEN SOURCE TEMPLATE"
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
          <div style={{ transform: `scale(${starPulse})` }}>
            <StarIcon size={36} color="#FFFFFF" />
          </div>
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

        {/* Command / Action Pill without forbidden external URLs */}
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
          <span style={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 800, fontSize: "18px" }}>$</span>
          <span style={{ color: "#FFFFFF", fontSize: "20px", fontFamily: "Consolas, monospace", fontWeight: 600 }}>
            npx @xiaohan/remotion-swiss-template
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
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ChatCommentIcon size={18} color="#FFFFFF" />
            <span>详细项目名称与配置已置顶在评论区</span>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              padding: "10px 24px",
              borderRadius: "100px",
              fontSize: "16px",
              fontWeight: 700,
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <SparkleIcon size={18} color="#FFFFFF" />
            <span>让你的 AI 智能体一键安装体验</span>
          </div>
        </div>
      </SwissCard>
    </div>
  );
};
