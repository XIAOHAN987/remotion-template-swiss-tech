import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const Background: React.FC<{
  title?: string;
  subtitle?: string;
  badge?: string;
}> = ({
  title = "全新发布 · GEMINI 3.7 FLASH",
  subtitle = "新一代多模态推理与极速引擎",
  badge = "GOOGLE DEEPMIND",
}) => {
  const frame = useCurrentFrame();

  // Seamless continuous flowing grid offset (no modulo to prevent any snapping)
  const gridOffsetY = frame * 0.8;

  // Gentle, strictly continuous single-direction ambient drift across the entire 91.3s
  const lightDriftX = interpolate(frame, [0, 2740], [-120, 120]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#060608",
        overflow: "hidden",
        pointerEvents: "none",
        fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
      }}
    >
      {/* Dark radial base gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 100% 70% at 50% 15%, #121318 0%, #060608 90%)",
        }}
      />

      {/* Crimson Ambient Glow at bottom - Smooth continuous drift with zero resets */}
      <div
        style={{
          position: "absolute",
          bottom: "-180px",
          left: `calc(50% + ${lightDriftX}px)`,
          transform: "translateX(-50%)",
          width: "1400px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(225, 29, 72, 0.22) 0%, rgba(185, 28, 28, 0.08) 45%, transparent 75%)",
          filter: "blur(80px)",
        }}
      />

      {/* Top Header - Swiss Clean Minimalist Grid Hierarchy */}
      <div
        style={{
          position: "absolute",
          top: "36px",
          left: "80px",
          right: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 40,
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          paddingBottom: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.45)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {badge}
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "0.2px",
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* Dynamic 3D Perspective Flowing Grid (Infinitely seamless) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "360px",
          perspective: "500px",
          overflow: "hidden",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0) 95%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0) 95%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-120px -120px 0 -120px",
            transform: "rotateX(60deg)",
            transformOrigin: "bottom center",
            backgroundImage: `
              linear-gradient(to right, rgba(239, 68, 68, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(239, 68, 68, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: `0px ${gridOffsetY}px`,
          }}
        />
      </div>

      {/* Bottom Footer Metadata - Swiss Editorial Style */}
      <div
        style={{
          position: "absolute",
          bottom: "22px",
          left: "80px",
          right: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "rgba(255, 255, 255, 0.35)",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          zIndex: 30,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
              boxShadow: "0 0 8px #22c55e",
            }}
          />
          <span>Google DeepMind · Gemini 3.7 Series</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span>LMSYS ARENA</span>
          <span>·</span>
          <span>SWE-BENCH PRO</span>
          <span>·</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
};
