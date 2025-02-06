import { AbsoluteFill } from "remotion";
import { Icons } from "../Utils/Icons";
import { FPSFactor } from "../../constants";

interface KeysAndSessionsProps {
  readonly frame: number;
  readonly fps: number;
  readonly startTime: number;
  readonly duration: number;
}

export const KeysAndSessions = ({ frame, fps, startTime, duration }: KeysAndSessionsProps) => {
  const startTimeKeys = startTime;
  const durationKeys = duration;
  const startTimeSessions = startTimeKeys + (25 * FPSFactor);
  const durationSessions = durationKeys + (startTimeKeys - startTimeSessions);

  const imagesKeys = ["key.svg", "password-fingerprint.svg"];
  const imagesSessions = ["time-duration-30.svg"];

  const keyIconSize = "260px";
  const sessionIconSize = "300px";

  return (
    <AbsoluteFill
      style={{ width: "400px", top: "160px", left: "48px" }}
    >
      {/* Passkey Based Auth */}
      <Icons
        sequenceName="Passkey Based Auth"
        images={imagesKeys}
        imageStyles={{height: keyIconSize, width: keyIconSize}}
        startTime={startTimeKeys}
        duration={durationKeys}
        containerStyles={{marginLeft: "40px"}}
        frame={frame}
        fps={fps}
      />

      {/* Sessions */}
      <Icons
        sequenceName="Sessions"
        images={imagesSessions}
        imageStyles={{height: sessionIconSize, width: sessionIconSize}}
        startTime={startTimeSessions}
        duration={durationSessions}
        containerStyles={{ marginTop: "400px", marginLeft: "130px" }}
        frame={frame}
        fps={fps}
      />
    </AbsoluteFill>
  );
};
