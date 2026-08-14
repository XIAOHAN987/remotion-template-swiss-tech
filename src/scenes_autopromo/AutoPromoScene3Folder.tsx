import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";

export const AutoPromoScene3Folder: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Floating file animation
  const file1Y = spring({ frame: frame - 5, fps, config: { damping: 15, stiffness: 100 } });
  const file2Y = spring({ frame: frame - 15, fps, config: { damping: 15, stiffness: 100 } });
  const file3Y = spring({ frame: frame - 25, fps, config: { damping: 15, stiffness: 100 } });
  const file4Y = spring({ frame: frame - 35, fps, config: { damping: 15, stiffness: 100 } });

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
      {/* Left: macOS Finder Window */}
      <div
        style={{
          flex: "1.1",
          height: "600px",
          borderRadius: "20px",
          backgroundColor: "#0f1117",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.7), 0 0 50px rgba(56, 189, 248, 0.1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* macOS Titlebar */}
        <div
          style={{
            height: "44px",
            backgroundColor: "rgba(24, 27, 34, 0.95)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f" }} />
          </div>
          <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)", fontWeight: 600, letterSpacing: "0.5px" }}>
            📁 public / (静态素材目录)
          </div>
        </div>

        {/* Finder File List */}
        <div style={{ flex: 1, padding: "28px 32px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { name: "voiceover.wav", type: "口播音频录音 (WAV)", color: "#ef4444", icon: "🎙️", anim: file1Y },
            { name: "subtitles.srt", type: "字幕脚本时间戳 (SRT)", color: "#38bdf8", icon: "📝", anim: file2Y },
            { name: "screen_demo.mp4", type: "产品演示 / 录屏 (MP4)", color: "#a855f7", icon: "🎬", anim: file3Y },
            { name: "benchmark.png", type: "实测跑分 / 架构图 (PNG)", color: "#22c55e", icon: "📊", anim: file4Y },
          ].map((file, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "14px",
                padding: "16px 20px",
                transform: `translateX(${interpolate(file.anim, [0, 1], [-30, 0])}px)`,
                opacity: file.anim,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "24px" }}>{file.icon}</span>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", fontFamily: "Consolas, monospace" }}>
                    {file.name}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.5)" }}>{file.type}</div>
                </div>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: file.color,
                  backgroundColor: `rgba(255, 255, 255, 0.06)`,
                  padding: "4px 12px",
                  borderRadius: "100px",
                }}
              >
                READY
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: 3 Steps to Reproduce */}
      <div style={{ flex: "1.1", display: "flex", flexDirection: "column", gap: "24px" }}>
        <SwissWhiteBadge
          title="素材丢进文件夹 · 一键同款复刻"
          subtitle="ZERO CODE FRICTION · DRAG & DROP"
          badge="极简 3 步工作流"
        />

        <SwissCard style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { step: "01", title: "放入素材", desc: "把你的音频、字幕与截图拖入 public/ 目录", color: "#ef4444" },
            { step: "02", title: "告诉 AI 智能体", desc: "对 Agent 说：“按这个脚本把第20秒做成轮播”", color: "#38bdf8" },
            { step: "03", title: "一键渲染导出", desc: "在 Studio 网页端右上角点击 Render 导出 1080P 成片", color: "#22c55e" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  backgroundColor: `rgba(255, 255, 255, 0.06)`,
                  border: `1px solid ${item.color}`,
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                {item.step}
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.55)", marginTop: "2px" }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </SwissCard>
      </div>
    </div>
  );
};
