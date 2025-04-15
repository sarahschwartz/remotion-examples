import { FPSFactor } from "../constants";
import { NewAccountDev } from "./PartTwo/NewAccountDev";
import { SpendingLimit } from "./PartTwo/SpendingLimit";
import { Icons } from "./Utils/Icons";
import { useCurrentFrame, useVideoConfig } from "remotion";

interface PartTwoProps {
  readonly startTime: number;
  readonly duration: number;
}

export const PartTwo = ({ startTime, duration }: PartTwoProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const editorSize = "960px";
  const codeIconSize = "500px";
  const browserDuration = duration;

  return (
    <>
      <Icons
        sequenceName="Browser"
        images={["browser.svg"]}
        imageStyles={{
          height: editorSize,
          width: editorSize,
          marginLeft: "-100px",
          marginTop: '-120px'
        }}
        startTime={startTime}
        duration={browserDuration}
        frame={frame}
        fps={fps}
      />

      {/* Implement Passwordless Accounts Fast */}
      <NewAccountDev
        frame={frame}
        fps={fps}
        startTime={startTime}
      />
      
      {/* Implement Spending Limits */}
      <SpendingLimit frame={frame} fps={fps} startTime={startTime + (240 * FPSFactor)} duration={210 * FPSFactor} />

      {/* Code */}
      {/* <Icons
        sequenceName="Code Icon"
        images={["code.svg"]}
        imageStyles={{
          height: codeIconSize,
          width: codeIconSize,
          marginLeft: "132px",
          marginTop: '140px'
        }}
        startTime={startTime + browserDuration - (55 * FPSFactor)}
        duration={42 * FPSFactor}
        frame={frame}
        fps={fps}
      /> */}

    </>
  );
};
