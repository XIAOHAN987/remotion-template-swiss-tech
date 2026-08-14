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

export const AutoPromoScene1AI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Camera zoom in video
  const videoScale = interpolate(frame, [0, 160], [1.0, 1.05], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 100px",
        gap: "60px",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {/* Left: macOS Video Player showcasing previous rendering */}
      <div
        style={{
          flex: "1.3",
          height: "640px",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.7), 0 0 50px rgba(239, 68, 68, 0.12)",
          backgroundColor: "#0d0f14",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* macOS Titlebar */}
        <div
          style={{
            height: "44px",
            backgroundColor: "rgba(20, 22, 28, 0.95)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "9px" }}>
            <div style={{ width: "13px", height: "13px", borderRadius: "50%", backgroundColor: "#ff5f56" }} />
            <div style={{ width: "13px", height: "13px", borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
            <div style={{ width: "13px", height: "13px", borderRadius: "50%", backgroundColor: "#27c93f" }} />
          </div>
          <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 500, letterSpacing: "1px" }}>
            AI_AUTONOMOUS_VIDEO_PIPELINE.MP4
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#38bdf8",
              backgroundColor: "rgba(56, 189, 248, 0.12)",
              padding: "4px 10px",
              borderRadius: "100px",
              fontWeight: 700,
            }}
          >
            100% CODE GENERATED
          </div>
        </div>

        {/* Video Content */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden", backgroundColor: "#000" }}>
          <div style={{ width: "100%", height: "100%", transform: `scale(${videoScale})` }}>
            <OffthreadVideo
              src={staticFile("3.7发布.mp4")}
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Right: Swiss Badges and Highlight Points */}
      <div style={{ flex: "0.9", display: "flex", flexDirection: "column", gap: "24px" }}>
        <SwissWhiteBadge
          title="AI 自动化视频工作流"
          subtitle="AUTONOMOUS CODE-DRIVEN ENGINE"
          badge="100% AI GENERATED"
        />

        <SwissCard style={{ padding: "30px 32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(239, 68, 68, 0.15)",
                  color: "#ef4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 900,
                }}
              >
                01
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>AI Agent 智能体编排</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.55)" }}>告别手动打关键帧，自然语言生成分镜</div>
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                  color: "#38bdf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 900,
                }}
              >
                02
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>Remotion 毫秒级精准渲染</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.55)" }}>React 代码级时序，确定性 1080P 零掉帧</div>
              </div>
            </div>
          </div>
        </SwissCard>
      </div>
    </div>
  );
};
