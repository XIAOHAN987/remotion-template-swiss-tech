import React from "react";

export const ActionPillButton: React.FC<{
  icon?: React.ReactNode;
  label: string;
  subLabel?: string;
  style?: React.CSSProperties;
}> = ({ icon, label, subLabel, style }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        color: "#09090B",
        borderRadius: "9999px",
        padding: "12px 28px",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.2)",
        fontWeight: 700,
        fontSize: "19px",
        letterSpacing: "0.5px",
        cursor: "pointer",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
        ...style,
      }}
    >
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      <span>{label}</span>
      {subLabel && (
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            opacity: 0.65,
            marginLeft: "4px",
          }}
        >
          {subLabel}
        </span>
      )}
    </div>
  );
};
