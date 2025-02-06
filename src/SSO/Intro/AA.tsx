import { AbsoluteFill } from "remotion";
import { Icons } from "../Utils/Icons";

interface AAProps {
  readonly frame: number;
  readonly fps: number;
  readonly startTime: number;
  readonly duration: number;
}

export const AccountAbstraction = ({ frame, fps, startTime, duration }: AAProps) => {
  const images = ["user-circle.svg", "arrow-right-dashed.svg", "wallet.svg"];

  return (
    <AbsoluteFill
      style={{ width: "400px", top: "200px", left: "52px" }}
    >
      <Icons
        sequenceName="Account Abstraction"
        images={images}
        imageStyles={{ height: "200px", width: "200px" }}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />
    </AbsoluteFill>
  );
};
