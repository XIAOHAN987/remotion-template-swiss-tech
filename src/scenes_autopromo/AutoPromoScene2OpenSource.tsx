import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";

export const AutoPromoScene2OpenSource: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const starCount = Math.floor(interpolate(frame, [10, 60], [1, 987], { extrapolateRight: "clamp" }));

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
      {/* Top Banner: Swiss White Badge */}
      <SwissWhiteBadge
        title="暗调瑞士极简组件库 · 正式开源"
        subtitle="SWISS MINIMALIST TECH KEYNOTE ENGINE"
        badge="OPEN SOURCE · MIT LICENSE"
      />

      {/* Center: GitHub Project Card */}
      <SwissCard style={{ width: "100%", maxWidth: "1540px", padding: "36px 44px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#000000">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.5px" }}>
                XIAOHAN987 / remotion-template-swiss-tech
              </div>
              <div style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.55)", marginTop: "4px" }}>
                Apple & Swiss Minimalist style keynote video generator for Remotion + AI Agents
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "10px 18px",
                borderRadius: "100px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <span style={{ color: "#fbbf24", fontSize: "18px" }}>★</span>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Star {starCount}</span>
            </div>
            <div
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.15)",
                color: "#4ade80",
                padding: "10px 18px",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 700,
                border: "1px solid rgba(74, 222, 128, 0.3)",
              }}
            >
              MIT LICENSE
            </div>
          </div>
        </div>

        {/* 4 Swiss Atomic Modules */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }}>
          {[
            { tag: "01 UI 容器", title: "SwissCard", desc: "18px圆角高斯毛玻璃" },
            { tag: "02 标题徽标", title: "SwissWhiteBadge", desc: "高对比纯白几何底板" },
            { tag: "03 背景系统", title: "DynamicGrid3D", desc: "无缝透视平铺流动网格" },
            { tag: "04 渲染核心", title: "OffthreadVideo", desc: "FFmpeg 离线抽帧零抖动" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "14px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <div style={{ fontSize: "12px", color: "#ef4444", fontWeight: 800, letterSpacing: "1px" }}>{item.tag}</div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>{item.title}</div>
              <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.5)" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </SwissCard>
    </div>
  );
};
