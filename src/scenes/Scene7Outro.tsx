import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";

export const Scene7Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9, stiffness: 85 },
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 80px 70px 80px",
        zIndex: 10,
      }}
    >
      <SwissCard
        style={{
          width: "1100px",
          padding: "60px 70px",
          transform: `scale(${interpolate(enterSpring, [0, 1], [0.92, 1])})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "28px",
        }}
      >
        <SwissWhiteBadge
          badge="GOOGLE DEEPMIND"
          title="GEMINI 3.7 FLASH"
          subtitle="全新一代多模态与代码智能引擎"
          style={{ width: "100%", alignItems: "center", textAlign: "center" }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <div style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: 800, letterSpacing: "1px" }}>
            白热化竞争 · 持续进化
          </div>
          <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "16px", maxWidth: "600px", lineHeight: "1.6" }}>
            从极速推理到具身智能，大模型行业竞逐仍在加速。
          </div>
        </div>
      </SwissCard>
    </div>
  );
};
