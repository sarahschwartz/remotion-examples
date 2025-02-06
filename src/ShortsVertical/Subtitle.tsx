import type { CSSProperties } from "react";
import { AbsoluteFill, Sequence } from "remotion";

const subtitle = {
  fontSize: 144,
  textAlign: "center",
  color: 'white',
  background: 'rgba(13, 53, 198, 0.75)',
  padding: '20px',
  borderRadius: '12px',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
} as CSSProperties;

interface SubtitleProps {
  readonly text: string;
  readonly startTime: number;
  readonly duration: number;
};

export const Subtitle = ({ text, startTime, duration }: SubtitleProps) => {
  return (
    <Sequence name={text} from={startTime} durationInFrames={duration}>
    <AbsoluteFill style={{width: '100%', height: '200px', top: 400,}}>
    <div className="inter-400" style={{ ...subtitle }}>
      {text}
    </div>
    </AbsoluteFill>
    </Sequence>
  );
};
