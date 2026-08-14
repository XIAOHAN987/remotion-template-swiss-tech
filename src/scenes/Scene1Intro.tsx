import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig, OffthreadVideo, staticFile } from "remotion";
import { SwissCard } from "../components/SwissCard";

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9, stiffness: 85 },
  });

  const translateY = interpolate(enterSpring, [0, 1], [40, 0]);
  const scale = interpolate(enterSpring, [0, 1], [0.94, 1]);

  // Subtle continuous slow camera push
  const zoom = interpolate(frame, [0, 281], [1, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Seamless exit transition (last 10 frames)
  const exitOpacity = interpolate(frame, [271, 281], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
        padding: "100px 80px 70px 80px",
        zIndex: 10,
      }}
    >
      {/* Large Featured Webpage Demo Window (1540 x 720) */}
      <SwissCard
        style={{
          width: "1540px",
          height: "720px",
          transform: `translateY(${translateY}px) scale(${scale})`,
          backgroundColor: "#0d0e12",
        }}
      >
        {/* macOS Browser Title Bar */}
        <div
          style={{
            height: "44px",
            backgroundColor: "rgba(20, 21, 28, 0.95)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            gap: "8px",
            zIndex: 20,
            position: "relative",
          }}
        >
          <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
          <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#eab308" }} />
          <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#22c55e" }} />

          <div
            style={{
              marginLeft: "16px",
              padding: "4px 18px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              borderRadius: "6px",
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.6)",
              letterSpacing: "0.5px",
            }}
          >
            deepmind.google/technologies/gemini/flash
          </div>
        </div>

        {/* Video Canvas using OffthreadVideo for frame-accurate zero-jitter rendering */}
        <div
          style={{
            width: "100%",
            height: "calc(100% - 44px)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transform: `scale(${zoom})`,
              transformOrigin: "center center",
            }}
          >
            <OffthreadVideo
              src={staticFile("3.7发布.mp4")}
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Top Right Live Tag */}
          <div
            style={{
              position: "absolute",
              top: "18px",
              right: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#FFFFFF",
              color: "#000000",
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "1px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
            <span>OFFICIAL DEMO</span>
          </div>
        </div>
      </SwissCard>
    </div>
  );
};
