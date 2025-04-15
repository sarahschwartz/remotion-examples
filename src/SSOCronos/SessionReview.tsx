import { Icons } from "../SSO/Utils/Icons";
import { OverviewProps } from "./types";
import { AbsoluteFill, Sequence } from "remotion";
import { SmartContracts } from "./SmartContracts";
import { getTransformStyles } from "../GlobalUtils/translate";

export const SessionReview = ({
  frame,
  fps,
  startTime,
  duration,
}: OverviewProps) => {
  const colorNumbers = [2, 3, 4];

  return (
    <AbsoluteFill style={{left: 50}}>
      {colorNumbers.map((colorNumber, index) => (
        <SessionReviewItem
          frame={frame}
          fps={fps}
          startTime={startTime}
          duration={duration}
          colorNumber={colorNumber}
          deleteTime={index === 2 ? startTime + 100 : undefined}
        />
      ))}
     </AbsoluteFill>
  );
};

interface SessionItemProps extends OverviewProps {
  readonly colorNumber: number;
  readonly deleteTime?: number;
}

function SessionReviewItem({
  frame,
  fps,
  startTime,
  duration,
  colorNumber,
  deleteTime,
}: SessionItemProps) {
  const iconSize = "180px";
  const gasSize = "140px";
  const lag = 0;
  const pointerSize = "80px";

  const pageSize = "200px";
  const codeSize = "90px";
  const xSize = "120px";

  const factor = 320;
  const topFactor = (colorNumber - 2) * factor;
  const gap = 180;

  const positionStart = 320;
  const position2 = positionStart + gap;
  const position3 = position2 + gap;
  const position4 = position3 + gap;
  const position5 = position4 + gap;

  const translateStartTime = 230;

  const transform = getTransformStyles({
    translate: { x: 0, y: colorNumber === 4 ? -factor / 2 : 0, startTime: colorNumber === 4 ? translateStartTime : undefined },
    frame,
    fps,
    startTime,
    delay: 0,
    duration,
  });
  const codeStyles = {
    height: codeSize,
    width: codeSize,
    marginLeft: `${position4 + 60}px`,
    marginTop: `${130 + (colorNumber - 2) * 320}px`,
    transform,
  } as React.CSSProperties;

  const containerStyles = {
    width: "1200px",
    height: "220px",
    border: "16px solid #d0cfce",
    borderRadius: "32px",
    left: "300px",
    top: `${80 + (colorNumber - 2) * 320}px`,
    transform,
  } as React.CSSProperties;

  const pageStyles = {
    height: pageSize,
    width: pageSize,
    marginLeft: `${position4 - 10}px`,
    marginTop: `${80 + topFactor}px`,
    transform,
  } as React.CSSProperties;

  const thisDuration = colorNumber === 3 ? duration - 350 : duration;

  return (
    <>
      <Sequence
        name="Session Review Item"
        from={startTime}
        durationInFrames={thisDuration}
      >
        <AbsoluteFill style={containerStyles} />
      </Sequence>

      <Icons
        sequenceName="Coin"
        images={[`coin${colorNumber}.svg`]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: `${positionStart}px`,
          marginTop: `${100 + topFactor}px`,
          transform,
        }}
        startTime={startTime + lag * 2}
        duration={thisDuration - lag * 2}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Time"
        images={["time-duration-30-gray.svg"]}
        imageStyles={{
          height: iconSize,
          width: iconSize,
          marginLeft: `${position2}px`,
          marginTop: `${100 + topFactor}px`,
          transform,
        }}
        startTime={startTime + lag}
        duration={thisDuration - lag}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="Gas"
        images={["gas.svg"]}
        imageStyles={{
          height: gasSize,
          width: gasSize,
          marginLeft: `${position3 + 25}px`,
          marginTop: `${120 + topFactor}px`,
          transform,
        }}
        startTime={startTime + lag * 2}
        duration={thisDuration - lag * 2}
        frame={frame}
        fps={fps}
      />

      <SmartContracts
        frame={frame}
        fps={fps}
        startTime={startTime + lag * 3}
        duration={thisDuration - lag * 3}
        pageStyles={pageStyles}
        codeStyles={codeStyles}
        codeFile={`code${colorNumber}.svg`}
      />

      <Icons
        sequenceName="Function"
        images={["function.svg"]}
        imageStyles={{
          height: "200px",
          width: "200px",
          marginLeft: `${position5}px`,
          marginTop: `${85 + topFactor}px`,
          transform,
        }}
        startTime={startTime + lag * 4}
        duration={thisDuration - lag * 4}
        frame={frame}
        fps={fps}
      />

      <Icons
        sequenceName="X"
        images={["x2.svg"]}
        imageStyles={{
          height: xSize,
          width: xSize,
          marginTop: `${120 + topFactor}px`,
          marginLeft: "1320px",
          transform,
        }}
        startTime={startTime}
        duration={thisDuration}
        frame={frame}
        fps={fps}
      />

      {deleteTime && (
        <Icons
          translate={{ x: -50, y: -120 }}
          sequenceName="Pointer"
          images={["pointer.svg"]}
          imageStyles={{
            height: pointerSize,
            width: pointerSize,
            marginTop: "730px",
            marginLeft: "1480px",
          }}
          startTime={startTime + 100}
          duration={thisDuration - 390}
          frame={frame}
          fps={fps}
        />
      )}
    </>
  );
}
