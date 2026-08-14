import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";
import { SparkleIcon, CheckCircleIcon } from "../components/SvgIcons";

export const AutoPromoScene4AIControl: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const fullText = `> "帮我把第 35 秒做成 4 张实测大图平滑 Tab 轮播，跑分改 68 分，断层极速 450 TPS"`;
  const charCount = Math.floor(interpolate(frame, [10, 65], [0, fullText.length], { extrapolateRight: "clamp" }));
  const displayText = fullText.slice(0, charCount);

  const responseScale = spring({ frame: frame - 65, fps, config: { damping: 15, stiffness: 120 } });
  const responseOpacity = interpolate(frame, [65, 75], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
        gap: "32px",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <SwissWhiteBadge
        title="与你的 AI 智能体实时沟通 · 随心修改"
        subtitle="NATURAL LANGUAGE CONTROL · ZERO MANUAL KEYFRAMES"
        badge="自由度极高 · 自然语言指挥"
      />

      <SwissCard style={{ width: "100%", maxWidth: "1500px", padding: "36px 44px" }}>
        {/* User Prompt Input Window */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "16px",
            padding: "24px 28px",
            marginBottom: "24px",
          }}
        >
          <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.4)", marginBottom: "10px", fontWeight: 700 }}>
            USER PROMPT (人类创作者指令)
          </div>
          <div
            style={{
              fontSize: "22px",
              fontFamily: "Consolas, 'Courier New', monospace",
              color: "#FFFFFF",
              fontWeight: 600,
              minHeight: "32px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {displayText}
            <span style={{ opacity: frame % 16 < 8 ? 1 : 0, color: "rgba(255, 255, 255, 0.8)", marginLeft: "4px" }}>▌</span>
          </div>
        </div>

        {/* AI Agent Response Bubble with pure SVG */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: responseOpacity,
            transform: `scale(${responseScale})`,
            marginBottom: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <SparkleIcon size={26} color="#FFFFFF" />
            <div>
              <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF" }}>
                AI AGENT: 模块已自动重构并完成毫秒级帧数对齐
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.55)", marginTop: "2px" }}>
                已将 4 张大图挂载为绝对定位多轨 Crossfade，纯数学 interpolateColors 驱动 Tab 渐变
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: 800,
              padding: "6px 14px",
              borderRadius: "100px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <CheckCircleIcon size={14} color="#FFFFFF" />
            EXECUTED IN 0.8S
          </div>
        </div>

        {/* 4 Modifiable Module Tags */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {[
            { tag: "布局结构", name: "分栏 / 大屏 / 轮播" },
            { tag: "时间轴", name: "SRT 字幕自动同步" },
            { tag: "动效逻辑", name: "Crossfade 多轨淡化" },
            { tag: "数据图表", name: "纯数学弹簧数字" },
          ].map((mod, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.45)", fontWeight: 700 }}>{mod.tag}</div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{mod.name}</div>
            </div>
          ))}
        </div>
      </SwissCard>
    </div>
  );
};
