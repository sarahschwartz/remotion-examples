import { AbsoluteFill, Sequence } from "remotion";
import { Title } from "../Utils/Title";
import { ZKsync } from "./ZKsync";

interface SSOTitleProps {
  readonly startTime: number;
  readonly duration: number;
}

export const SSOTitle = ({ startTime, duration }: SSOTitleProps) => {
  return (
    <AbsoluteFill
        style={{ width: "400px", top: "160px", left: "48px" }}
      >
        <Sequence
          name="Smart Sign On"
          from={startTime}
          durationInFrames={duration}
          style={{ flexDirection: "column" }}
        >
          <ZKsync />
          <Title titleText="Smart Sign On" titleColor="rgb(23, 85, 244)" />
        </Sequence>
      </AbsoluteFill>
  );
};
