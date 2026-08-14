import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";
import { StarIcon, CodeTerminalIcon } from "../components/SvgIcons";

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
      <SwissWhiteBadge
        title="暗调极简组件库 · 正式开源"
        subtitle="SWISS MINIMALIST TECH KEYNOTE ENGINE"
        badge="OPEN SOURCE · MIT LICENSE"
      />

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
              <CodeTerminalIcon size={32} color="#000000" />
            </div>
            <div>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.5px" }}>
                remotion-template-swiss-tech
              </div>
              <div style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.55)", marginTop: "4px" }}>
                暗调极简视频风格组件库 · 任何人均可一键复刻同款
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                padding: "10px 18px",
                borderRadius: "100px",
                border: "1px solid rgba(255, 255, 255, 0.16)",
              }}
            >
              <StarIcon size={18} color="#FFFFFF" />
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Star {starCount}</span>
            </div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
                padding: "10px 18px",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 700,
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              MIT 开源协议
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
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.45)", fontWeight: 800, letterSpacing: "1px" }}>
                {item.tag}
              </div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>{item.title}</div>
              <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.5)" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </SwissCard>
    </div>
  );
};
