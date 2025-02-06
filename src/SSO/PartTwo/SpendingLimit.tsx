import { AbsoluteFill } from "remotion";
import { Icons } from "../Utils/Icons";
import { ClickButton } from "./ClickButton";
import { defaultButton, buyButton } from "../Utils/styles";
import { Balance } from "./Balance";
import { FPSFactor } from "../../constants";

interface SpendingLimitProps {
  readonly frame: number;
  readonly fps: number;
  readonly startTime: number;
  readonly duration: number;
}

export const SpendingLimit = ({ frame, fps, startTime, duration }: SpendingLimitProps) => {
  const coinSize = "130px";
  const pointerSize = "160px";
  const checkMarkSize = "100px";
  const xSize = "134px";

  return (
    <AbsoluteFill
      style={{ width: "400px", top: "220px", left: "180px" }}
    >
      <Icons
        sequenceName="Coin"
        images={["coin.svg"]}
        imageStyles={{ height: coinSize, width: coinSize }}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />
      
      <Balance
        startTime={startTime}
        frame={frame}
        fps={fps}
        duration={duration}
        containerStyles={{
          marginLeft: "138px",
          marginTop: "10px",
          height: '120px',
          width: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        textStyles={{
          fontSize: "96px",
        }}
      />

      <ClickButton
        startTime={startTime}
        duration={duration}
        text="Buy"
        buttonStyles={{ ...defaultButton, ...buyButton }}
        containerStyles={{ marginTop: "180px", marginLeft: "74px" }}
        frame={frame}
        fps={fps}
        totalClicks={3}
      />

      <Icons
        translate={{ x: -50, y: -120 }}
        sequenceName="Pointer"
        images={["pointer.svg"]}
        imageStyles={{
          height: pointerSize,
          width: pointerSize,
          marginTop: "508px",
          marginLeft: "260px",
        }}
        startTime={startTime}
        duration={duration}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Success1"
        images={["circle-check.svg"]}
        imageStyles={{
          height: checkMarkSize,
          width: checkMarkSize,
          marginTop: "24px",
          marginLeft: "360px",
        }}
        startTime={startTime + (35 * FPSFactor)}
        duration={45 * FPSFactor}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Success2"
        images={["circle-check.svg"]}
        imageStyles={{
          height: checkMarkSize,
          width: checkMarkSize,
          marginTop: "24px",
          marginLeft: "360px",
        }}
        startTime={startTime + (90 * FPSFactor)}
        duration={45 * FPSFactor}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Fail"
        images={["x.svg"]}
        imageStyles={{
          height: xSize,
          width: xSize,
          marginTop: "12px",
          marginLeft: "350px",
        }}
        startTime={startTime + (140 * FPSFactor)}
        duration={60 * FPSFactor}
        frame={frame}
        fps={fps}
      />
    </AbsoluteFill>
  );
};
