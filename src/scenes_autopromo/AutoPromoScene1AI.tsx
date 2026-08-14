import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  OffthreadVideo,
  staticFile,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";
import { CodeTerminalIcon, SparkleIcon, CheckCircleIcon } from "../components/SvgIcons";

export const AutoPromoScene1AI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const videoScale = interpolate(frame, [0, 160], [1.0, 1.04], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 90px",
        gap: "50px",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {/* Left: macOS Player showcasing the ACTUAL FINISHED EXQUISITE VIDEO */}
      <div
        style={{
          flex: "1.35",
          height: "650px",
          borderRadius: "22px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.85), 0 0 50px rgba(225, 29, 72, 0.15)",
          backgroundColor: "#0d0f14",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* macOS Titlebar */}
        <div
          style={{
            height: "46px",
            backgroundColor: "rgba(18, 20, 26, 0.98)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "9px" }}>
            <div style={{ width: "13px", height: "13px", borderRadius: "50%", backgroundColor: "#ff5f56" }} />
            <div style={{ width: "13px", height: "13px", borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
            <div style={{ width: "13px", height: "13px", borderRadius: "50%", backgroundColor: "#27c93f" }} />
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.5)",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontFamily: "Consolas, monospace",
            }}
          >
            FINISHED_KEYNOTE_MASTERPIECE.MP4
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#FFFFFF",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "4px 12px",
              borderRadius: "100px",
              fontWeight: 700,
              letterSpacing: "1px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
            100% CODE DRIVEN
          </div>
        </div>

        {/* Video Canvas playing the actual rendered high-end video */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden", backgroundColor: "#000" }}>
          <div style={{ width: "100%", height: "100%", transform: `scale(${videoScale})` }}>
            <OffthreadVideo
              src={staticFile("Gemini3.7发布_轻量预览.mp4")}
              startFrom={280} // Start right from the visually stunning Arena Benchmark scene!
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Right: Swiss Badges & Structural Points */}
      <div style={{ flex: "0.85", display: "flex", flexDirection: "column", gap: "24px" }}>
        <SwissWhiteBadge
          title="AI 自动化视频工作流"
          subtitle="AUTONOMOUS CODE-DRIVEN ENGINE"
          badge="100% AI GENERATED"
        />

        <SwissCard style={{ padding: "32px 36px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <SparkleIcon size={22} color="#FFFFFF" />
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>AI Agent 智能体编排</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.55)", marginTop: "3px", lineHeight: "1.4" }}>
                  告别手动打关键帧，自然语言实时生成分镜与状态机
                </div>
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }} />

            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CodeTerminalIcon size={22} color="#FFFFFF" />
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>Remotion 毫秒级精准渲染</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.55)", marginTop: "3px", lineHeight: "1.4" }}>
                  React 纯代码时序编排，确定性 1080P 零掉帧离线导出
                </div>
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255, 255, 255, 0.4)", fontSize: "13px" }}>
              <CheckCircleIcon size={16} color="#FFFFFF" />
              <span>全片采用瑞士暗调极简设计规范</span>
            </div>
          </div>
        </SwissCard>
      </div>
    </div>
  );
};
