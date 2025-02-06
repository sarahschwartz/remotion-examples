import { AbsoluteFill } from "remotion";
import { Icons } from "../Utils/Icons";

interface BoxProps {
  readonly frame: number;
  readonly fps: number;
  readonly startTime: number;
  readonly duration: number;
}

export const Box = ({ frame, fps, startTime, duration }: BoxProps) => {
  const size = "400px";
  const images = ["package.svg"];

  return (
    <AbsoluteFill
      style={{ width: "400px", top: "480px", left: "108px" }}
    >
      <Icons 
        spinIcons
        sequenceName="OOTB"
        images={images}
        imageStyles={{ flexDirection: "column", height: size, width: size }}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />
    </AbsoluteFill>
  );
};
