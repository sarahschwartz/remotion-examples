import { AbsoluteFill, Img, Sequence, staticFile } from "remotion";
import { Title } from "../Utils/Title";

interface SSOTitleProps {
  readonly startTime: number;
  readonly duration: number;
  readonly name?: string;
  readonly text?: string;
  readonly color?: string;
  readonly width?: string;
  readonly top?: string;
  readonly left?: string;
}

export const SSOTitle = ({
  startTime,
  duration,
  name,
  text,
  color,
  width,
  top,
  left,
}: SSOTitleProps) => {
  return (
    <AbsoluteFill
      style={{
        width: width || "400px",
        top: top || "160px",
        left: left || "160px",
      }}
    >
      <Sequence
        name="ZK logo"
        from={startTime + 20}
        durationInFrames={duration - 20}
      >
        <div style={{ display: "flex" }}>
          <Img
            src={staticFile("zksync.png")}
            style={{ width: "150px", height: "150px", marginLeft: "10px" }}
          />
      <Title titleText="ZKsync" titleColor="white" fontSize={120} addDelay={-40}  />
        </div>
      </Sequence>
      <Sequence
        name={name || "Smart Sign On"}
        from={startTime}
        durationInFrames={duration}
        style={{ flexDirection: "column", top: 140 }}
      >

        <Title
          titleText={text || "Smart Sign On"}
          titleColor={color || "rgb(23, 85, 244)"}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
