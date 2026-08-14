import React from "react";
import { useCurrentFrame } from "remotion";
import { SUBTITLES } from "../data/subtitles";

export const SubtitleBar: React.FC = () => {
  const frame = useCurrentFrame();

  const activeSubtitle = SUBTITLES.find(
    (sub) => frame >= sub.startFrame && frame <= sub.endFrame + 4
  );

  if (!activeSubtitle) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "65px",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          background: "rgba(10, 10, 14, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          borderRadius: "9999px",
          padding: "10px 32px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "1px",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          {activeSubtitle.text}
        </span>
      </div>
    </div>
  );
};
