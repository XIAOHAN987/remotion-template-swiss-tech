import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile, Easing } from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";

export const Scene5Comparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9, stiffness: 85 },
  });

  // Seamless exit transition
  const exitOpacity = interpolate(frame, [383, 393], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Horizontal pan on price comparison chart
  const panX = interpolate(frame, [0, 393], [0, -30], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  // Staggered reveal for right cards
  const card1Spring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 16, mass: 0.7, stiffness: 90 },
  });

  const card2Spring = spring({
    frame: frame - 160,
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
      {/* Left: Price Comparison Chart Window */}
      <SwissCard
        style={{
          width: "1040px",
          height: "720px",
          transform: `scale(${interpolate(enterSpring, [0, 1], [0.94, 1])})`,
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: `translateX(${panX}px)`,
          }}
        >
          <Img
            src={staticFile("价格对比图.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
      </SwissCard>

      {/* Right: Swiss Comparison Breakdown */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "460px",
          transform: `translateX(${interpolate(enterSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <SwissWhiteBadge
          badge="HEAD TO HEAD"
          title="对标 DeepSeek V4 Pro"
          subtitle="智商领先与成本定价横向实测"
        />

        {/* Breakdown 1: Gemini 3.7 Flash Intelligence */}
        <div
          style={{
            transform: `translateX(${interpolate(card1Spring, [0, 1], [30, 0])}px)`,
            opacity: card1Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "22px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderLeft: "4px solid #ef4444",
            }}
          >
            <div>
              <div style={{ color: "#FFFFFF", fontSize: "19px", fontWeight: 700 }}>
                Gemini 3.7 Flash
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "13px", marginTop: "2px" }}>
                综合智能指数更高
              </div>
            </div>
            <div style={{ fontSize: "36px", fontWeight: 900, color: "#ef4444" }}>
              +3分
            </div>
          </SwissCard>
        </div>

        {/* Breakdown 2: DeepSeek V4 Pro Cost Advantage */}
        <div
          style={{
            transform: `translateX(${interpolate(card2Spring, [0, 1], [30, 0])}px)`,
            opacity: card2Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "22px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderLeft: "4px solid #38bdf8",
            }}
          >
            <div>
              <div style={{ color: "#FFFFFF", fontSize: "19px", fontWeight: 700 }}>
                DeepSeek V4 Pro 0813
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.55)", fontSize: "13px", marginTop: "2px" }}>
                极致性价比良心单价
              </div>
            </div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#38bdf8" }}>
              成本优势
            </div>
          </SwissCard>
        </div>
      </div>
    </div>
  );
};
