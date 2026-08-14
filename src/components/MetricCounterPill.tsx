import React from "react";
import { GlassPill } from "./GlassPill";

export interface MetricItem {
  value: string | number;
  unit?: string;
  label: string;
}

export const MetricCounterPill: React.FC<{
  items: MetricItem[];
  style?: React.CSSProperties;
}> = ({ items, style }) => {
  return (
    <GlassPill
      style={{
        padding: "18px 42px",
        display: "flex",
        alignItems: "center",
        gap: "32px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
        ...style,
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "42px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                lineHeight: "1.1",
                fontVariantNumeric: "tabular-nums",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                display: "flex",
                alignItems: "baseline",
                gap: "4px",
              }}
            >
              <span>{item.value}</span>
              {item.unit && (
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {item.unit}
                </span>
              )}
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              {item.label}
            </div>
          </div>

          {index < items.length - 1 && (
            <div
              style={{
                color: "rgba(255, 255, 255, 0.2)",
                fontSize: "28px",
                fontWeight: 300,
                userSelect: "none",
              }}
            >
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </GlassPill>
  );
};
