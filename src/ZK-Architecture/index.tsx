import { AbsoluteFill, Img, Sequence, staticFile, useCurrentFrame } from "remotion";
import { FPSFactor } from "../constants";
import { ElasticNetwork } from "./ElasticNetwork";
import { ArchCards } from "./ArchCards";
import { Titles } from "./Titles";
import { Airbender } from "./Airbender";
import { Gateway } from "./Gateway";
import { VideoWithBorder } from "./Utils/VideoWithBorder";

const EN_GRAPHIC_START = 2680 * FPSFactor;
const EN_GRAPHIC_DURATION = 310 * FPSFactor;

const ENDING_EN_GRAPHIC_START = 7150 * FPSFactor;
const ENDING_EN_GRAPHIC_DURATION = 130 * FPSFactor;

export const ZKArch = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <VideoWithBorder filename="draft-architecture-upgrades-compressed.mp4" />

<AbsoluteFill>
    <Img
      src={staticFile("colors-overlay.png")}
      style={{ width: "100%", height: "100%" }}
    />
  </AbsoluteFill>
      {/* <SideDecor /> */}
      <Titles />
      <ArchCards />
      <ArchCards isEnding />

      <Sequence from={EN_GRAPHIC_START} durationInFrames={EN_GRAPHIC_DURATION}>
        <ElasticNetwork frame={frame} startTime={EN_GRAPHIC_START} />
      </Sequence>
      <Sequence name="Ending EN" from={ENDING_EN_GRAPHIC_START} durationInFrames={ENDING_EN_GRAPHIC_DURATION}>
        <ElasticNetwork delayFactor={10} frame={frame} startTime={ENDING_EN_GRAPHIC_START} />
      </Sequence>

      <Airbender frame={frame} />
      <Airbender isEnding frame={frame} />
      <Gateway frame={frame} />
      <Gateway isEnding frame={frame} />

    </AbsoluteFill>
  );
};
