import { AbsoluteFill, Img, Sequence, staticFile } from "remotion";
import { Title } from "./Utils/Title";
import { FPSFactor } from "../constants";
import { StaticTitle } from "./Utils/StaticTitle";

export function Titles() {
  const INTRO_START = 0 * FPSFactor;
  const INTRO_DURATION = 480 * FPSFactor;

  const TITLE_DURATION = 100 * FPSFactor;

  const EN_TITLE_START = 1850 * FPSFactor;
  const ROLLUP_TITLE_START = 2000 * FPSFactor;
  const OS_TITLE_START = 2990 * FPSFactor;
  const AIRBENDER_TITLE_START = 3850 * FPSFactor;
  const GATEWAY_TITLE_START = 4700 * FPSFactor;
  const INTEROP_TITLE_START = 6030 * FPSFactor;
  const ENDING_INTEROP_TITLE_START = 7860 * FPSFactor;
  const DOCS_TITLE_START = 8000 * FPSFactor;

  return (
    <>
      <Sequence from={INTRO_START} durationInFrames={INTRO_DURATION}>
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <StaticTitle titleText="What's new with" titleColor="#0D26FF" />
        </AbsoluteFill>
        <AbsoluteFill style={{ top: 700, textAlign: "center" }}>
          <StaticTitle titleText="ZKsync" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={EN_TITLE_START} durationInFrames={TITLE_DURATION}>
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <Title titleText="{ Elastic Network }" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={ROLLUP_TITLE_START}
        durationInFrames={TITLE_DURATION}
      >
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <Title titleText="{ Rollup Cluster }" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={OS_TITLE_START} durationInFrames={TITLE_DURATION}>
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <Title titleText="{ ZKsync OS }" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={AIRBENDER_TITLE_START}
        durationInFrames={TITLE_DURATION}
      >
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <Title titleText="{ ZKsync Airbender }" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={GATEWAY_TITLE_START}
        durationInFrames={TITLE_DURATION}
      >
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <Title titleText="{ ZKsync Gateway }" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={INTEROP_TITLE_START}
        durationInFrames={TITLE_DURATION + 60 * FPSFactor}
        name="Interop"
      >
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <Title titleText="{ Universal Interop }" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={ENDING_INTEROP_TITLE_START}
        durationInFrames={TITLE_DURATION + 20 * FPSFactor}
        name="Interop"
      >
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <Title titleText="🎉 Universal Interop 🎉" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={DOCS_TITLE_START}
        durationInFrames={TITLE_DURATION + 60 * FPSFactor}
        name="Docs"
      >
        <AbsoluteFill style={{ top: 20, textAlign: "center" }}>
          <Title titleText="{ docs.zksync.io }" titleColor="#0D26FF" />
        </AbsoluteFill>
      </Sequence>
    </>
  );
}
