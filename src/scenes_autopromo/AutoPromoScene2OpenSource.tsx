import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";
import { StarIcon, CodeTerminalIcon, CheckCircleIcon, SparkleIcon } from "../components/SvgIcons";

export const AutoPromoScene2OpenSource: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring for main container
  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const starCount = Math.floor(interpolate(frame, [10, 60], [1, 987], { extrapolateRight: "clamp" }));

  // Staggered springs for 4 child cards
  const card1Spring = spring({ frame: frame - 15, fps, config: { damping: 16, stiffness: 110 } });
  const card2Spring = spring({ frame: frame - 28, fps, config: { damping: 16, stiffness: 110 } });
  const card3Spring = spring({ frame: frame - 41, fps, config: { damping: 16, stiffness: 110 } });
  const card4Spring = spring({ frame: frame - 54, fps, config: { damping: 16, stiffness: 110 } });

  // Micro animation metrics
  const blurValue = Math.floor(interpolate(frame, [15, 60], [0, 24], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const contrastValue = Math.floor(interpolate(frame, [28, 75], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const gridFlowOffset = (frame * 1.5) % 24;
  const frameCounter = Math.floor(interpolate(frame, [54, 120], [100, 2740], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 80px",
        gap: "30px",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {/* Top Header Badge */}
      <SwissWhiteBadge
        title="暗调极简组件库 · 正式开源"
        subtitle="SWISS MINIMALIST TECH KEYNOTE ENGINE"
        badge="OPEN SOURCE · MIT LICENSE"
      />

      {/* Main Wide Swiss Card */}
      <SwissCard style={{ width: "100%", maxWidth: "1580px", padding: "32px 40px" }}>
        {/* Repo Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "26px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
              }}
            >
              <CodeTerminalIcon size={30} color="#000000" />
            </div>
            <div>
              <div style={{ fontSize: "26px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.5px" }}>
                remotion-template-swiss-tech
              </div>
              <div style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.5)", marginTop: "3px" }}>
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
                padding: "8px 18px",
                borderRadius: "100px",
                border: "1px solid rgba(255, 255, 255, 0.16)",
              }}
            >
              <StarIcon size={16} color="#FFFFFF" />
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF" }}>Star {starCount}</span>
            </div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#FFFFFF",
                padding: "8px 18px",
                borderRadius: "100px",
                fontSize: "14px",
                fontWeight: 700,
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              MIT 开源协议
            </div>
          </div>
        </div>

        {/* 4 Staggered Animated Feature Cards with Micro Charts & Dynamic Visuals */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }}>
          {/* Card 01: SwissCard */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              opacity: card1Spring,
              transform: `translateY(${interpolate(card1Spring, [0, 1], [30, 0])}px)`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)", fontWeight: 800, letterSpacing: "1px" }}>
                01 UI 容器
              </div>
              <div style={{ fontSize: "11px", color: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "2px 8px", borderRadius: "100px" }}>
                BLUR: {blurValue}PX
              </div>
            </div>
            <div style={{ fontSize: "19px", fontWeight: 800, color: "#FFFFFF" }}>SwissCard</div>

            {/* Micro Chart: Frosted glass layers & progress indicator */}
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "10px",
                padding: "12px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
                <span>毛玻璃高斯模糊</span>
                <span style={{ color: "#FFFFFF", fontWeight: 700 }}>18px 圆角</span>
              </div>
              <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ width: `${(blurValue / 24) * 100}%`, height: "100%", backgroundColor: "#FFFFFF", borderRadius: "3px" }} />
              </div>
            </div>
          </div>

          {/* Card 02: SwissWhiteBadge */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              opacity: card2Spring,
              transform: `translateY(${interpolate(card2Spring, [0, 1], [30, 0])}px)`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)", fontWeight: 800, letterSpacing: "1px" }}>
                02 标题徽标
              </div>
              <div style={{ fontSize: "11px", color: "#000000", backgroundColor: "#FFFFFF", padding: "2px 8px", borderRadius: "100px", fontWeight: 800 }}>
                CONTRAST {contrastValue}%
              </div>
            </div>
            <div style={{ fontSize: "19px", fontWeight: 800, color: "#FFFFFF" }}>SwissWhiteBadge</div>

            {/* Micro Graphic: Mini Solid White Badge */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                padding: "8px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#000000", fontSize: "13px", fontWeight: 900 }}>纯白几何底板</span>
              <span style={{ color: "#000000", fontSize: "10px", fontWeight: 700, backgroundColor: "rgba(0,0,0,0.08)", padding: "2px 6px", borderRadius: "4px" }}>
                高对比字阶
              </span>
            </div>
          </div>

          {/* Card 03: DynamicGrid3D */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              opacity: card3Spring,
              transform: `translateY(${interpolate(card3Spring, [0, 1], [30, 0])}px)`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)", fontWeight: 800, letterSpacing: "1px" }}>
                03 背景系统
              </div>
              <div style={{ fontSize: "11px", color: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "2px 8px", borderRadius: "100px" }}>
                FLOW: ACTIVE
              </div>
            </div>
            <div style={{ fontSize: "19px", fontWeight: 800, color: "#FFFFFF" }}>DynamicGrid3D</div>

            {/* Micro Graphic: Animated Vector Mesh */}
            <div
              style={{
                height: "44px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                  backgroundSize: "14px 14px",
                  backgroundPosition: `0px ${gridFlowOffset}px`,
                  transform: "perspective(80px) rotateX(45deg)",
                }}
              />
            </div>
          </div>

          {/* Card 04: OffthreadVideo */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              opacity: card4Spring,
              transform: `translateY(${interpolate(card4Spring, [0, 1], [30, 0])}px)`,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)", fontWeight: 800, letterSpacing: "1px" }}>
                04 渲染核心
              </div>
              <div style={{ fontSize: "11px", color: "#4ade80", backgroundColor: "rgba(34, 197, 94, 0.15)", padding: "2px 8px", borderRadius: "100px", fontWeight: 700 }}>
                0 JITTER
              </div>
            </div>
            <div style={{ fontSize: "19px", fontWeight: 800, color: "#FFFFFF" }}>OffthreadVideo</div>

            {/* Micro Graphic: Accurate Frame Indicator */}
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "8px",
                padding: "8px 12px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontFamily: "Consolas, monospace" }}>
                  FFmpeg 抽帧
                </span>
              </div>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#FFFFFF", fontFamily: "Consolas, monospace" }}>
                #{frameCounter}
              </span>
            </div>
          </div>
        </div>
      </SwissCard>
    </div>
  );
};
