import React from "react";

export const GlassPill: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  pill?: boolean;
}> = ({ children, style, pill = true }) => {
  return (
    <div
      style={{
        background: "rgba(18, 19, 25, 0.75)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: pill ? "9999px" : "20px",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
        padding: "16px 32px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
