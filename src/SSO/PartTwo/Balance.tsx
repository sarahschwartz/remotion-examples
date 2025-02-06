import { CSSProperties, useEffect, useState } from "react";
import { Sequence, spring } from "remotion";
import { FPSFactor } from "../../constants";

interface BalanceProps {
  readonly startTime: number;
  readonly duration: number;
  readonly frame: number;
  readonly fps: number;
  readonly containerStyles?: CSSProperties;
  readonly textStyles?: CSSProperties;
}

export const Balance = ({
  startTime,
  duration,
  frame,
  fps,
  containerStyles,
  textStyles
}: BalanceProps) => {
  const [balance, setBalance] = useState<string>("0.25");
  const scaleDelay = 5 * FPSFactor;
  const delay1 = startTime + (50 * FPSFactor);
  const delay2 = startTime + (100 * FPSFactor);

  const enter = spring({
    fps,
    frame: frame - startTime - scaleDelay,
    config: {
      damping: 200,
    },
  });

  const exit = spring({
    fps,
    config: {
      damping: 200,
    },
    durationInFrames: 20 * FPSFactor,
    delay: duration - (20 * FPSFactor),
    frame: frame - startTime - scaleDelay,
  });


  const baseScale = enter - exit;

  useEffect(() => {
    if (!frame) return;
    if (frame < delay1) {
      if(balance !== "0.25"){
        setBalance("0.25");
      }
    } else if (frame > delay2) {
      if(balance !== "0.23"){
        setBalance("0.23");
      }
    } else if (frame > delay1) {
      if(balance !== "0.24"){
        setBalance("0.24");
      }
    }
  }, [frame]);

  return (
    <Sequence
      name="Blance"
      from={startTime}
      durationInFrames={duration}
      style={containerStyles}
    >
      <div className="inter-800" style={{...textStyles, transform: `scale(${baseScale})`}}>
        {balance}
      </div>
    </Sequence>
  );
};
