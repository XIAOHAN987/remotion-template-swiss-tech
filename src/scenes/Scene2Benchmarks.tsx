import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile, Easing } from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";

export const Scene2Benchmarks: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth entrance
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9, stiffness: 85 },
  });

  // Seamless exit transition
  const exitOpacity = interpolate(frame, [353, 363], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Simulated smooth human scroll on leaderboard
  const panY = interpolate(frame, [0, 363], [0, -80], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Staggered reveal for right cards:
  // Stat 1: 56 Score (starts at frame 10)
  const stat1Spring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 16, mass: 0.7, stiffness: 90 },
  });
  const scoreVal = Math.round(interpolate(frame, [10, 45], [0, 56], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  }));

  // Stat 2: 340 TPS (starts at frame 150)
  const stat2Spring = spring({
    frame: frame - 150,
    fps,
    config: { damping: 16, mass: 0.7, stiffness: 90 },
  });
  const tpsVal = Math.round(interpolate(frame, [150, 190], [0, 340], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  }));

  // Stat 3: -50% (starts at frame 270)
  const stat3Spring = spring({
    frame: frame - 270,
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
      {/* Left: Large Arena Screenshot Showcase Window */}
      <SwissCard
        style={{
          width: "1040px",
          height: "720px",
          transform: `scale(${interpolate(enterSpring, [0, 1], [0.94, 1])})`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: `translateY(${panY}px)`,
          }}
        >
          <Img
            src={staticFile("Arenna跑分截图.png")}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
      </SwissCard>

      {/* Right: Swiss Editorial White Badge & Data Breakdown Stack */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "460px",
          transform: `translateX(${interpolate(enterSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        {/* User requested: LMSYS Arena Benchmark Rank #2 white card */}
        <SwissWhiteBadge
          badge="GLOBAL ARENA"
          title="LMSYS Arena Benchmark"
          subtitle="Rank #2 · 仅次于 GPT-5.6 Tera"
        />

        {/* Metric 1: 56 Score */}
        <div
          style={{
            transform: `translateX(${interpolate(stat1Spring, [0, 1], [30, 0])}px)`,
            opacity: stat1Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "#FFFFFF", fontSize: "19px", fontWeight: 700 }}>
                智能指数得分
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "13px", marginTop: "2px" }}>
                综合推理能力跃升
              </div>
            </div>
            <div
              style={{
                fontSize: "44px",
                fontWeight: 900,
                color: "#FFFFFF",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {scoreVal}
            </div>
          </SwissCard>
        </div>

        {/* Metric 2: 340 TPS */}
        <div
          style={{
            transform: `translateX(${interpolate(stat2Spring, [0, 1], [30, 0])}px)`,
            opacity: stat2Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "rgba(239, 68, 68, 0.3)",
              background: "rgba(239, 68, 68, 0.08)",
            }}
          >
            <div>
              <div style={{ color: "#FFFFFF", fontSize: "19px", fontWeight: 700 }}>
                断层领先极速
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "13px", marginTop: "2px" }}>
                峰值生成吞吐
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {tpsVal}
              </span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>
                tps
              </span>
            </div>
          </SwissCard>
        </div>

        {/* Metric 3: -50% Price Cut */}
        <div
          style={{
            transform: `translateX(${interpolate(stat3Spring, [0, 1], [30, 0])}px)`,
            opacity: stat3Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "#FFFFFF", fontSize: "19px", fontWeight: 700 }}>
                官方定价下调
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "13px", marginTop: "2px" }}>
                API 单价直接减半
              </div>
            </div>
            <div
              style={{
                fontSize: "36px",
                fontWeight: 900,
                color: "#22c55e",
              }}
            >
              -50%
            </div>
          </SwissCard>
        </div>
      </div>
    </div>
  );
};
