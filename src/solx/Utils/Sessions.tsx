import { AbsoluteFill } from "remotion";
import { Icons } from "../../SSO/Utils/Icons";

interface KeysAndSessionsProps {
  readonly frame: number;
  readonly fps: number;
  readonly startTime: number;
  readonly duration: number;
}

export const Sessions = ({ frame, fps, startTime, duration }: KeysAndSessionsProps) => {
  const imagesSessions = ["time-duration-30.svg"];
  const sessionIconSize = "300px";

  return (
    <AbsoluteFill
      style={{ width: "400px", left: "48px" }}
    >
      {/* Sessions */}
      <Icons
        sequenceName="Sessions"
        images={imagesSessions}
        imageStyles={{height: sessionIconSize, width: sessionIconSize}}
        startTime={startTime}
        duration={duration}
        containerStyles={{ marginTop: "180px", marginLeft: "140px" }}
        frame={frame}
        fps={fps}
      />
    </AbsoluteFill>
  );
};
