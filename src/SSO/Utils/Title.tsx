import { CSSProperties } from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

const word = {
  marginBottom: 10,
  display: "inline-block",
  background: 'rgba(255, 255, 255, 0.1)',
  padding: '4px 8px',
  borderRadius: '8px',
};

interface TitleProps {
  readonly titleText: string;
  readonly titleColor: string;
  readonly fontSize?: number;
  readonly styles?: CSSProperties;
}

export const Title = ({ titleText, titleColor, fontSize, styles }: TitleProps) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const words = titleText.split(" ");

  const title = {
    fontWeight: "bold",
    fontSize: fontSize || 180,
  };

  const titleStyles = styles ?? word;

  return (
    <div className="inter-400" style={title}>
      {words.map((t, i) => {
        const delay = i * 5;

        const scale = spring({
          fps: videoConfig.fps,
          frame: frame - delay,
          config: {
            damping: 200,
          },
        });

        return (
          <span
            key={t}
            style={{
              ...titleStyles,
              color: titleColor,
              transform: `scale(${scale})`,
            }}
          >
            {t}
          </span>
        );
      })}
    </div>
  );
};
