import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig, OffthreadVideo, staticFile } from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";

export const Scene6Robotics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9, stiffness: 85 },
  });

  // Seamless exit transition
  const exitOpacity = interpolate(frame, [615, 625], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Switch between Sign Language and Robotics Video around frame 500 (83.7s)
  const isRobotics = frame >= 500;
  const switchCrossfade = interpolate(frame, [495, 505], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Feature cards spring
  const card1Spring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 16, mass: 0.7, stiffness: 90 },
  });

  const card2Spring = spring({
    frame: frame - 490,
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
      {/* Left: Dual Video Showcase Window with OffthreadVideo */}
      <SwissCard
        style={{
          width: "1040px",
          height: "720px",
          transform: `scale(${interpolate(enterSpring, [0, 1], [0.94, 1])})`,
          backgroundColor: "#0d0e12",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {/* Video 1: Sign Language (0 ~ 505 frames) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 1 - switchCrossfade,
              display: switchCrossfade < 1 ? "block" : "none",
            }}
          >
            <OffthreadVideo
              src={staticFile("手语翻译演示.mp4")}
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Video 2: Robotics (495 ~ end frames) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: switchCrossfade,
              display: switchCrossfade > 0 ? "block" : "none",
            }}
          >
            <OffthreadVideo
              src={staticFile("机器人模型.mp4")}
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Top Live Tag */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(10, 10, 14, 0.85)",
              backdropFilter: "blur(16px)",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: isRobotics ? "#ef4444" : "#22c55e",
              }}
            />
            <span style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>
              {isRobotics ? "GEMINI ROBOTICS 2" : "SIGN LANGUAGE TRANSLATION"}
            </span>
          </div>
        </div>
      </SwissCard>

      {/* Right: Swiss Embodied AI Panel */}
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
          badge="ACCESSIBILITY & ROBOTICS"
          title="具身智能与普惠科技"
          subtitle="听障手语转文字与人形机器人模型"
        />

        {/* Feature 1: Sign Language */}
        <div
          style={{
            transform: `translateX(${interpolate(card1Spring, [0, 1], [30, 0])}px)`,
            opacity: card1Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              borderColor: !isRobotics ? "rgba(34, 197, 94, 0.3)" : "rgba(255, 255, 255, 0.12)",
            }}
          >
            <div style={{ color: "#FFFFFF", fontSize: "19px", fontWeight: 700 }}>
              手语实时转文字
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", lineHeight: "1.4" }}>
              面向听障人群开发专用模型，实时精确识别手语并输出自然语言。
            </div>
          </SwissCard>
        </div>

        {/* Feature 2: Robotics 2 */}
        <div
          style={{
            transform: `translateX(${interpolate(card2Spring, [0, 1], [30, 0])}px)`,
            opacity: card2Spring,
          }}
        >
          <SwissCard
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              borderColor: isRobotics ? "rgba(239, 68, 68, 0.3)" : "rgba(255, 255, 255, 0.12)",
            }}
          >
            <div style={{ color: "#FFFFFF", fontSize: "19px", fontWeight: 700 }}>
              Gemini Robotics 2
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", lineHeight: "1.4" }}>
              面向人形机器人与实体具身设备的全新推理控制模型。
            </div>
          </SwissCard>
        </div>
      </div>
    </div>
  );
};
