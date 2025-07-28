import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";

// One-time helper --------------------------------------------------
const blobStyle = (
  width: number,
  height: number,
  color: string,
  blur: number
) => ({
  width,
  height,
  background: color,
  borderRadius: "50%",
  filter: `blur(${blur}px)`,
  position: "absolute" as const,
});

export const SideDecor: React.FC = () => {
  const { height } = useVideoConfig();

  return (
    <div style={{ pointerEvents: "none" }}>
      {/* LEFT side */}
      <AbsoluteFill
        style={{
          top: -40,
          left: -120,
          ...blobStyle(600, 500, "rgba(13,38,255,.25)", 60),
        }}
      />
      <AbsoluteFill
        style={{
          top: 400,
          left: -100,
          ...blobStyle(600, 350, "rgba(75, 232, 219, 0.35)", 60),
        }}
      />
      <AbsoluteFill
        style={{
          top: 700,
          left: -100,
          ...blobStyle(600, 350, "rgba(71, 168, 167, 0.35)", 60),
        }}
      />

      {/* RIGHT side */}
      <AbsoluteFill
        style={{
          top: -40,
          left: 1500,
          ...blobStyle(600, 480, "rgba(23,209,255,.35)", 60),
        }}
      />
      <AbsoluteFill
        style={{
          top: 500,
          left: 1500,
          ...blobStyle(640, 360, "rgba(255,178,91,.35)", 60),
        }}
      />
            <AbsoluteFill
        style={{
          top: 700,
          left: 1500,
          ...blobStyle(620, 350, "rgba(71, 168, 167, 0.35)", 60),
        }}
      />

      {/* Pixel pops */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: i % 2 ? 60 : "auto",
            right: i % 2 ? "auto" : 60,
            top: (height / 8) * i + 30,
            width: 12,
            height: 12,
            background: ["#FFB25B", "#2ED5D2", "#0D26FF"][i % 3],
            borderRadius: 3,
            opacity: 0.9,
            transform: `rotate(${i * 10}deg)`,
          }}
        />
      ))}
    </div>
  );
};
