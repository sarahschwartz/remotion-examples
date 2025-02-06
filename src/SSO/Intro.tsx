import { SSOTitle } from "./Intro/SSO-Title";
import { AccountAbstraction } from "./Intro/AA";
import { Box } from "./Intro/Box";
import { KeysAndSessions } from "./Intro/KeysAndSessions";
import {
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
  Sequence,
  Img,
  staticFile
} from "remotion";
import { FPSFactor } from "../constants";

interface IntroProps {
  readonly startTime: number;
  readonly duration: number;
}

export const Intro = ({ startTime, duration }: IntroProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const aaDelay = 180 * FPSFactor;

  return (
    <AbsoluteFill style={{marginLeft: '40px'}}>
      {/* INTRO */}

       {/* SVG Background */}
       <AbsoluteFill style={{ width: "400px", left: "-250px" }}>
        <Sequence name="Left Panel" from={startTime} durationInFrames={duration}>
          <Img
            src={staticFile("diagonal-eye.svg")}
            style={{ rotate: "90deg", transform: "scale(1, 0.75)" }}
          />
        </Sequence>
      </AbsoluteFill>

      {/* Smart Sign On Text */}
      <SSOTitle startTime={startTime} duration={160 * FPSFactor} />
      {/* AA is OOTB */}
      <AccountAbstraction startTime={startTime + aaDelay} duration={160 * FPSFactor} frame={frame} fps={fps} />
      <Box startTime={startTime + aaDelay} duration={160 * FPSFactor} frame={frame} fps={fps} />

      {/* Passkeys & Sessions */}
      <KeysAndSessions startTime={startTime + (340 * FPSFactor)} duration={98 * FPSFactor} frame={frame} fps={fps} />
    </AbsoluteFill>
  );
};
