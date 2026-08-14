import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile, Easing, interpolateColors } from "remotion";
import { SwissCard } from "../components/SwissCard";

export const Scene4CodeAgent: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9, stiffness: 85 },
  });

  // Seamless exit transition
  const exitOpacity = interpolate(frame, [606, 616], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 4 Carousel tabs configuration
  const tabs = [
    { title: "01 WebDev 代码提升", image: "3.7工程提升.png", desc: "相比 3.6Flash 实测大幅升级" },
    { title: "02 SWE-Bench 领先", image: "3.7工程提升截图2.png", desc: "基准测试综合能力全面领先" },
    { title: "03 Agent 智能体执行力", image: "3.7工程截图3.png", desc: "复杂工具调用与长任务突出提升" },
    { title: "04 PDF 设计稿还原", image: "3.7工程截图4.png", desc: "完整设计稿高保真端到端生成" },
  ];

  // Precise, smooth crossfade opacity for each of the 4 image layers
  const card0Opacity = interpolate(frame, [0, 155, 170], [1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const card1Opacity = interpolate(frame, [155, 170, 315, 330], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const card2Opacity = interpolate(frame, [315, 330, 445, 460], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const card3Opacity = interpolate(frame, [445, 460, 616], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Smooth continuous pan for each layer (strictly continuous, no sudden reset)
  const pan0 = interpolate(frame, [0, 170], [0, -25], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
  const pan1 = interpolate(frame, [155, 330], [20, -20], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
  const pan2 = interpolate(frame, [315, 460], [20, -20], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
  const pan3 = interpolate(frame, [445, 616], [20, -20], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.25, 0.1, 0.25, 1) });

  // Tab activation progress [0..1]
  const tab0Progress = interpolate(frame, [0, 155, 170], [1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tab1Progress = interpolate(frame, [155, 170, 315, 330], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tab2Progress = interpolate(frame, [315, 330, 445, 460], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tab3Progress = interpolate(frame, [445, 460, 616], [0, 1, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const tabProgresses = [tab0Progress, tab1Progress, tab2Progress, tab3Progress];

  // Active badge label
  let activeTitle = tabs[0].title;
  if (frame >= 455) activeTitle = tabs[3].title;
  else if (frame >= 325) activeTitle = tabs[2].title;
  else if (frame >= 165) activeTitle = tabs[1].title;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: exitOpacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px 80px 60px 80px",
        gap: "18px",
        zIndex: 10,
      }}
    >
      {/* Top Carousel Tab Navigator (Deterministic colors via interpolateColors) */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          width: "1540px",
          transform: `translateY(${interpolate(enterSpring, [0, 1], [-20, 0])}px)`,
        }}
      >
        {tabs.map((tab, idx) => {
          const prog = tabProgresses[idx];
          const bg = interpolateColors(prog, [0, 1], ["rgba(20, 22, 28, 0.75)", "#FFFFFF"]);
          const textCol = interpolateColors(prog, [0, 1], ["rgba(255, 255, 255, 0.6)", "#000000"]);
          const borderCol = interpolateColors(prog, [0, 1], ["rgba(255, 255, 255, 0.1)", "#FFFFFF"]);

          return (
            <div
              key={idx}
              style={{
                flex: 1,
                padding: "14px 20px",
                borderRadius: "12px",
                backgroundColor: bg,
                color: textCol,
                border: `1px solid ${borderCol}`,
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                boxShadow: prog > 0.5 ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "0.5px" }}>
                {tab.title}
              </div>
              <div style={{ fontSize: "12px", opacity: 0.8 }}>
                {tab.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* Large Featured Benchmark Showcase Window with 4 Smooth Crossfading Layers */}
      <SwissCard
        style={{
          width: "1540px",
          height: "600px",
          transform: `scale(${interpolate(enterSpring, [0, 1], [0.94, 1])})`,
          backgroundColor: "#0c0d12",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Layer 0 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: card0Opacity,
            transform: `translateY(${pan0}px)`,
            display: card0Opacity > 0 ? "block" : "none",
          }}
        >
          <Img
            src={staticFile(tabs[0].image)}
            style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "#0c0d12" }}
          />
        </div>

        {/* Layer 1 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: card1Opacity,
            transform: `translateY(${pan1}px)`,
            display: card1Opacity > 0 ? "block" : "none",
          }}
        >
          <Img
            src={staticFile(tabs[1].image)}
            style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "#0c0d12" }}
          />
        </div>

        {/* Layer 2 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: card2Opacity,
            transform: `translateY(${pan2}px)`,
            display: card2Opacity > 0 ? "block" : "none",
          }}
        >
          <Img
            src={staticFile(tabs[2].image)}
            style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "#0c0d12" }}
          />
        </div>

        {/* Layer 3 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: card3Opacity,
            transform: `translateY(${pan3}px)`,
            display: card3Opacity > 0 ? "block" : "none",
          }}
        >
          <Img
            src={staticFile(tabs[3].image)}
            style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "#0c0d12" }}
          />
        </div>

        {/* Bottom Left Active Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "24px",
            background: "rgba(10, 10, 14, 0.85)",
            backdropFilter: "blur(16px)",
            padding: "8px 20px",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 10,
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
          <span style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 700 }}>
            {activeTitle} · 实测数据
          </span>
        </div>
      </SwissCard>
    </div>
  );
};
