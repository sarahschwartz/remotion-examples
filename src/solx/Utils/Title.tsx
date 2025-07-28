import { AbsoluteFill, Sequence } from "remotion";

interface TitleProps {
  readonly startTime: number;
  readonly duration: number;
  readonly name: string;
  readonly text: string;
  readonly style?: React.CSSProperties;
}

export const Title = ({ startTime, duration, name, text, style }: TitleProps) => {
  return (
    <AbsoluteFill
        style={style}
      >
        <Sequence
          name={name}
          from={startTime}
          durationInFrames={duration}
          style={{ flexDirection: "column" }}
        >
          <h1>{text}</h1>

        </Sequence>
      </AbsoluteFill>
  );
};
