import { Icons } from "./Utils/Icons";
import { useCurrentFrame, useVideoConfig, AbsoluteFill, Sequence, Img, staticFile } from "remotion";

interface PartThreeProps {
  readonly startTime: number;
  readonly duration: number;
}

export const PartThree = ({ startTime, duration }: PartThreeProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconSize = "300px";
  const iconDelay = -2;

  return (
    <>
     {/* SVG Background */}
     <AbsoluteFill style={{ width: "400px", left: "-250px" }}>
        <Sequence name="Left Panel" from={startTime} durationInFrames={duration}>
          <Img
            src={staticFile("diagonal-eye.svg")}
            style={{ rotate: "90deg", transform: "scale(1, 0.75)" }}
          />
        </Sequence>
      </AbsoluteFill>


      {/* Icons */}
      <Icons
        sequenceName="JS/TS Icons"
        images={["brand-javascript.svg", "brand-typescript.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: "20px",
          marginTop: '170px'
        }}
        startTime={startTime + iconDelay}
        duration={duration - iconDelay - 15}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Swift/Mobile Icons"
        images={["device-mobile.svg", "brand-swift.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: "20px",
          marginTop: '520px'
        }}
        startTime={startTime + iconDelay + 50}
        duration={duration - iconDelay - 50}
        frame={frame}
        fps={fps}
        spinIcons={[true, false]}
      />

    </>
  );
};
