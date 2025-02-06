import { AbsoluteFill } from "remotion";
import { Icons } from "../Utils/Icons";
import { ClickButton } from "./ClickButton";
import { Fingerprint } from "./Fingerprint";
import { bigBlueButton, defaultButton, signUpContainerStyles } from "../Utils/styles";
import { FPSFactor } from "../../constants";

interface NewAccountDevProps {
  readonly frame: number;
  readonly fps: number;
  readonly startTime: number;
}

export const NewAccountDev = ({
  frame,
  fps,
  startTime,
}: NewAccountDevProps) => {
  const duration = 140 * FPSFactor;
  const pointerSize = "160px";

  return (
    <AbsoluteFill
      style={{ width: "400px", top: "-60px", left: "-20px" }}
    >
      <ClickButton
        startTime={startTime}
        duration={duration}
        text="Sign Up"
        containerStyles={signUpContainerStyles}
        buttonStyles={{...bigBlueButton, ...defaultButton}}
        frame={frame}
        fps={fps}
        totalClicks={1}
      />

      <Icons
        translate={{ x: -50, y: -120 }}
        sequenceName="Pointer"
        images={["pointer.svg"]}
        imageStyles={{
          height: pointerSize,
          width: pointerSize,
          marginTop: "660px",
          marginLeft: "480px",
        }}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />

      <Fingerprint
        startTime={startTime + duration - (10 * FPSFactor)}
        duration={100 * FPSFactor}
        frame={frame}
        fps={fps}
      />
    </AbsoluteFill>
  );
};
