import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SwissCard } from "../components/SwissCard";
import { SwissWhiteBadge } from "../components/SwissWhiteBadge";
import {
  ScienceAtomIcon,
  DashboardMetricsIcon,
  LayersArchitectureIcon,
  RocketLaunchIcon,
} from "../components/SvgIcons";

export const AutoPromoScene5UseCases: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 90 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const cases = [
    {
      icon: <ScienceAtomIcon size={30} color="#FFFFFF" />,
      title: "科技发布 · 前沿科普",
      desc: "AI大模型发布会 / 跑分对比 / 算法原理解析",
      delay: 5,
    },
    {
      icon: <DashboardMetricsIcon size={30} color="#FFFFFF" />,
      title: "商业汇报 · 业务大屏",
      desc: "企业年度财报 / 数据大屏 / KPI 与经营复盘",
      delay: 15,
    },
    {
      icon: <LayersArchitectureIcon size={30} color="#FFFFFF" />,
      title: "知识讲解 · 架构拆解",
      desc: "深度技术教程 / 架构设计 / 知识点系统拆解",
      delay: 25,
    },
    {
      icon: <RocketLaunchIcon size={30} color="#FFFFFF" />,
      title: "产品宣发 · 特性演示",
      desc: "SaaS 商业上线 / 功能版本更新 / 核心卖点巡礼",
      delay: 35,
    },
  ];

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
        gap: "36px",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <SwissWhiteBadge
        title="全场景赋能 · 极简高级"
        subtitle="MULTI-PURPOSE COMMERCIAL & EDUCATIONAL USE CASES"
        badge="四大主流应用场景"
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1500px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {cases.map((c, i) => {
          const cardSpring = spring({ frame: frame - c.delay, fps, config: { damping: 16, stiffness: 100 } });
          return (
            <SwissCard
              key={i}
              style={{
                padding: "32px 36px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
                transform: `scale(${cardSpring})`,
                opacity: cardSpring,
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "18px",
                  backgroundColor: `rgba(255, 255, 255, 0.08)`,
                  border: `1px solid rgba(255, 255, 255, 0.18)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "#FFFFFF" }}>{c.title}</div>
                <div style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.55)" }}>{c.desc}</div>
              </div>
            </SwissCard>
          );
        })}
      </div>
    </div>
  );
};
