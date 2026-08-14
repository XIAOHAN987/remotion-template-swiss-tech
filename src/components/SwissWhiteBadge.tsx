import React from "react";

export const SwissWhiteBadge: React.FC<{
  title: string;
  subtitle?: string;
  badge?: string;
  style?: React.CSSProperties;
}> = ({ title, subtitle, badge, style }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        color: "#000000",
        borderRadius: "14px",
        padding: "16px 24px",
        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
        ...style,
      }}
    >
      {badge && (
        <div
          style={{
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            color: "rgba(0, 0, 0, 0.5)",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </div>
      )}
      <div
        style={{
          fontSize: "22px",
          fontWeight: 900,
          letterSpacing: "-0.5px",
          lineHeight: "1.15",
          color: "#000000",
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(0, 0, 0, 0.65)",
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};
