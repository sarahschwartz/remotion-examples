import React from "react";

export const GradientLine: React.FC<{
  readonly height?: number;
  readonly width?: string;
  readonly duration?: number;
  readonly colors?: [string, string, string];
  readonly style?: React.CSSProperties;
}> = ({ height = 4, width = "100%", duration = 3, style, colors = ["#0D26FF", "#17D1FF", "#0D26FF"] }) => {
  const gradient = `linear-gradient(90deg, ${colors.join(",")})`;
  return (
    <>
      <style>{`
        @keyframes slide-gradient {
          0%   { background-position:   100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div
        style={{
          width,
          height,
          background: gradient,
          backgroundSize: "200% 100%",
          animation: `slide-gradient ${duration}s linear infinite alternate-reverse`,
          borderRadius: height / 2, 
          ...style,
        }}
      />
    </>
  );
};
