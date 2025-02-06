import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Intro } from "./Intro";
import { PartTwo } from "./PartTwo";
import { PartThree } from "./PartThree";
import { Demo } from "./Demo";
import SSOCode from "../CodeHike/sso";
import { VideoWithBorder } from "./Utils/VideoWithBorder";
import { FPSFactor } from "../constants";

const FADE_DURATION = 12 * FPSFactor;
const INTRO_START = 160 * FPSFactor;
const INTRO_DURATION = 434 * FPSFactor;
const DEMO_START = 600 * FPSFactor;
const DEMO_MID_POINT = 1003 * FPSFactor;
const PART_TWO_FADE_START = 1436 * FPSFactor;
const PART_TWO_START = 1870 * FPSFactor;
const PART_TWO_DURATION = 530 * FPSFactor;
const SSO_CODE_START = 2368 * FPSFactor;
const PART_THREE_FADE_START = (3400-7) * FPSFactor;
const PART_THREE_START = 3260 * FPSFactor;
const PART_THREE_DURATION = 145 * FPSFactor;

const fadePoints = [
  DEMO_START - (18 * FPSFactor),
  DEMO_MID_POINT - (12 * FPSFactor),
  PART_TWO_FADE_START,
  PART_THREE_FADE_START,
];

const videoOffsetPoints = [
  { start: INTRO_START, end: INTRO_START + INTRO_DURATION - FPSFactor },
  { start: PART_TWO_START, end: PART_TWO_START + PART_TWO_DURATION - (2 * FPSFactor) },
  { start: PART_THREE_START, end: PART_THREE_START + PART_THREE_DURATION },
];

export const SSO = () => {
  const frame = useCurrentFrame();
  const opacity = calculateOpacity(frame);

  return (
    <AbsoluteFill>
      <VideoWithBorder frame={frame} videoOffsetPoints={videoOffsetPoints} />

      <Intro startTime={INTRO_START} duration={INTRO_DURATION} />

      <Demo startTime={DEMO_START} />

      <PartTwo startTime={PART_TWO_START} duration={PART_TWO_DURATION} />

      <SSOCode startTime={SSO_CODE_START} />

      <PartThree startTime={PART_THREE_START} duration={PART_THREE_DURATION} />

      <AbsoluteFill
        style={{
          backgroundColor: "black",
          opacity,
          width: "3000px",
          height: "3000px",
        }}
      />
    </AbsoluteFill>
  );
};

function calculateOpacity(currentFrame: number) {
  for (const start of fadePoints) {
    // Fade to black
    if (currentFrame >= start && currentFrame <= start + FADE_DURATION) {
      return interpolate(currentFrame, [start, start + FADE_DURATION], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
      // Hold at black
      if (currentFrame > start + FADE_DURATION && 
        currentFrame < start + FADE_DURATION + 10) {
      return 1;
    }
    const end = start + FADE_DURATION + (5 * FPSFactor);
    // Fade from black
    if (currentFrame >= end - FADE_DURATION && currentFrame <= end) {
      return interpolate(currentFrame, [end - FADE_DURATION, end], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
  }
  return 0;
}
